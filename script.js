let subjectCount = 0;

// Meme images configuration
// Put your meme images in a 'memes' folder and update these paths
const passedMemes = [
    'memes/passed1.jpg',
    'memes/passed2.jpg',
    'memes/passed3.jpg',
    'memes/passed4.jpg',
    'memes/passed5.jpg'
];

const failedMemes = [
    'memes/failed1.jpg',
    'memes/failed2.jpg',
    'memes/failed3.jpg',
    'memes/failed4.jpg',
    'memes/failed5.jpg'
];

// Motivational messages
const passedMessages = [
    "Grabe! You ate that! No crumbs left!",
    "Pasado ka na, humble e noh!",
    "Certified achiever, parang wala lang sayo!",
    "Light work lang ‘to para sayo, BGC level!",
    "You popped off! G ka na sa next round!",
    "Ikaw na talaga, top-tier energy!",
    "Slay ka na naman, as usual.",
    "Parang quiz lang, nilaro mo lang oh!",
    "Hits different when it’s your name on top!",
    "Smart, witty, and unstoppable — ikaw ‘yan!"
];


const failedMessages = [
    "Chill, hindi pa tapos ‘to — bawi next time!",
    "Laban lang, hindi lahat ng matalino laging pasado.",
    "G lang, small setback, big comeback!",
    "Walang tulog pero may pag-asa!",
    "Failure? More like plot twist lang ‘yan!",
    "Review muna, tapos flex ulit!",
    "Bounce back agad G!",
    "Roadblock lang ‘to, hindi dead end!",
    "Smile lang, baka ma-fall sayo si success.",
    "Buti pa ML mo may skin, notes mo wala hwahawhawhaw"
];
function getRandomMeme(memeArray) {
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    return memeArray[randomIndex];
}

function getRandomMessage(messageArray) {
    const randomIndex = Math.floor(Math.random() * messageArray.length);
    return messageArray[randomIndex];
}

function showMeme(isPassed) {
    const memeContainer = document.getElementById('meme-container');
    const motivationalText = document.getElementById('motivational-text');
    
    memeContainer.innerHTML = '';
    motivationalText.textContent = '';
    
    if (isPassed !== null) {
        // Show motivational message
        motivationalText.textContent = getRandomMessage(isPassed ? passedMessages : failedMessages);
        
        // Show meme image
        const memeImg = document.createElement('img');
        memeImg.src = getRandomMeme(isPassed ? passedMemes : failedMemes);
        memeImg.alt = isPassed ? 'Passed Meme' : 'Failed Meme';
        memeImg.onerror = function() {
            this.style.display = 'none';
        };
        memeContainer.appendChild(memeImg);
    }
}

function validateGrade(input) {
    let value = parseFloat(input.value);
    
    // Check if value is greater than 100
    if (value > 100) {
        input.value = 100;
    }
    // Check if value is less than 0
    else if (value < 0) {
        input.value = 0;
    }
}

function addSubject() {
    subjectCount++;
    const container = document.getElementById('subjects-container');
    const subjectDiv = document.createElement('div');
    subjectDiv.className = 'subject-row';
    subjectDiv.id = `subject-${subjectCount}`;
    
    subjectDiv.innerHTML = `
        <label><input type="text" class="grade-input" placeholder="Subject Name" style="text-align: left; width: 100%;"></label>
        <input type="number" class="grade-input prelim" placeholder="0" min="0" max="100" step="0.01" onchange="calculateGWA(${subjectCount})" oninput="validateGrade(this)">
        <input type="number" class="grade-input midterm" placeholder="0" min="0" max="100" step="0.01" onchange="calculateGWA(${subjectCount})" oninput="validateGrade(this)">
        <input type="number" class="grade-input prefinals" placeholder="0" min="0" max="100" step="0.01" onchange="calculateGWA(${subjectCount})" oninput="validateGrade(this)">
        <input type="number" class="grade-input finals" placeholder="0" min="0" max="100" step="0.01" onchange="calculateGWA(${subjectCount})" oninput="validateGrade(this)">
        <div class="result-box" id="gwa-${subjectCount}">-</div>
        <button class="delete-btn" onclick="deleteSubject(${subjectCount})">Delete</button>
    `;
    
    container.appendChild(subjectDiv);
}

function deleteSubject(id) {
    const subject = document.getElementById(`subject-${id}`);
    if (subject) {
        subject.remove();
        calculateOverallGWA();
    }
}

function calculateGWA(id) {
    const subject = document.getElementById(`subject-${id}`);
    const prelim = parseFloat(subject.querySelector('.prelim').value) || 0;
    const midterm = parseFloat(subject.querySelector('.midterm').value) || 0;
    const prefinals = parseFloat(subject.querySelector('.prefinals').value) || 0;
    const finals = parseFloat(subject.querySelector('.finals').value) || 0;

    const gwa = (prelim * 0.20) + (midterm * 0.20) + (prefinals * 0.20) + (finals * 0.40);
    const gwaBox = document.getElementById(`gwa-${id}`);
    
    gwaBox.textContent = gwa.toFixed(2);
    
    if (gwa >= 59.50) {
        gwaBox.className = 'result-box passed';
    } else if (gwa > 0) {
        gwaBox.className = 'result-box failed';
    } else {
        gwaBox.className = 'result-box';
    }

    calculateOverallGWA();
}

function calculateOverallGWA() {
    const subjects = document.querySelectorAll('.subject-row');
    let totalGWA = 0;
    let count = 0;

    subjects.forEach(subject => {
        const gwaText = subject.querySelector('.result-box').textContent;
        if (gwaText !== '-' && gwaText !== '') {
            const gwa = parseFloat(gwaText);
            if (gwa > 0) {
                totalGWA += gwa;
                count++;
            }
        }
    });

    const overallGWA = count > 0 ? totalGWA / count : 0;
    const gwaDisplay = document.getElementById('overall-gwa');
    const statusDisplay = document.getElementById('status');

    gwaDisplay.textContent = overallGWA.toFixed(2);

    if (overallGWA >= 59.50) {
        statusDisplay.textContent = 'PASSED';
        statusDisplay.className = 'status passed';
        showMeme(true);
    } else if (overallGWA > 0) {
        statusDisplay.textContent = 'FAILED';
        statusDisplay.className = 'status failed';
        showMeme(false);
    } else {
        statusDisplay.textContent = 'Calculate Your Grades';
        statusDisplay.className = 'status';
        statusDisplay.style.background = 'rgba(255,255,255,0.2)';
        showMeme(null);
    }
}

function printGrades() {
    window.print();
}

function saveGrades() {
    const subjects = document.querySelectorAll('.subject-row');
    let gradesData = 'GRADE CALCULATOR REPORT\n';
    gradesData += '='.repeat(80) + '\n\n';
    
    subjects.forEach((subject, index) => {
        const subjectName = subject.querySelector('input[type="text"]').value || `Subject ${index + 1}`;
        const prelim = subject.querySelector('.prelim').value || '0';
        const midterm = subject.querySelector('.midterm').value || '0';
        const prefinals = subject.querySelector('.prefinals').value || '0';
        const finals = subject.querySelector('.finals').value || '0';
        const gwa = subject.querySelector('.result-box').textContent;
        
        gradesData += `${subjectName}\n`;
        gradesData += `  Prelim: ${prelim} | Midterm: ${midterm} | Pre-Finals: ${prefinals} | Finals: ${finals}\n`;
        gradesData += `  GWA: ${gwa}\n\n`;
    });
    
    const overallGWA = document.getElementById('overall-gwa').textContent;
    const status = document.getElementById('status').textContent;
    
    gradesData += '='.repeat(80) + '\n';
    gradesData += `OVERALL GWA: ${overallGWA}\n`;
    gradesData += `STATUS: ${status}\n`;
    gradesData += '='.repeat(80) + '\n\n';
    gradesData += 'Created by Wolf with ❤️\n';
    
    const blob = new Blob([gradesData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grades_report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Add initial subject on page load
window.onload = function() {
    addSubject();
};