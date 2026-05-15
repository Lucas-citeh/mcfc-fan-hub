// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.background = 'rgba(13, 31, 60, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'var(--city-navy)';
        header.style.backdropFilter = 'none';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to cards
document.querySelectorAll('.match-card, .news-card, .player-card, .stat-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Simulate live match time update
const liveMatches = document.querySelectorAll('.match-status.live');
liveMatches.forEach(match => {
    setInterval(() => {
        const text = match.textContent;
        const timeMatch = text.match(/(\d+)/);
        if (timeMatch) {
            let minutes = parseInt(timeMatch[1]);
            if (minutes < 90) {
                minutes++;
                match.textContent = `LIVE ${minutes}'`;
            } else {
                match.textContent = 'FT';
                match.classList.remove('live');
            }
        }
    }, 60000); // Update every minute
});

// Add hover effect sound (optional visual feedback)
document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderLeft = '3px solid var(--city-blue)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.borderLeft = 'none';
    });
});

// Player profiles — 2025/26 season
const playerProfiles = {
    'Gianluigi Donnarumma': {
        description: "Italy's no.1 between the sticks. Joined from PSG in summer 2025 and quickly cemented himself as City's first-choice keeper with commanding shot-stopping and presence in the box.",
        stats: { 'Appearances': 32, 'Clean Sheets': 13, 'Saves': 78, 'Goals Conceded': 32 }
    },
    'James Trafford': {
        description: "Homegrown shot-stopper back at the club after his time at Burnley. Provides reliable backup and continues to push for more minutes.",
        stats: { 'Appearances': 6, 'Clean Sheets': 2, 'Saves': 14, 'Goals Conceded': 7 }
    },
    'Marcus Bettinelli': {
        description: "Experienced third-choice keeper and dressing-room presence. Rarely featured but a steady veteran option.",
        stats: { 'Appearances': 1, 'Clean Sheets': 0, 'Saves': 2, 'Goals Conceded': 1 }
    },
    'Ruben Dias': {
        description: "Rock at the heart of City's defence. Captain material whose leadership and reading of the game underpin the back line.",
        stats: { 'Appearances': 33, 'Goals': 1, 'Assists': 2, 'Clean Sheets': 13 }
    },
    'John Stones': {
        description: "Ball-playing centre-back whose composure and passing range help City build from the back. Fitness has been managed carefully this season.",
        stats: { 'Appearances': 22, 'Goals': 1, 'Assists': 1, 'Clean Sheets': 9 }
    },
    'Marc Guehi': {
        description: "January 2026 signing from Crystal Palace. Has slotted seamlessly into the back four and formed a strong partnership with Dias.",
        stats: { 'Appearances': 14, 'Goals': 0, 'Assists': 1, 'Clean Sheets': 6 }
    },
    'Rayan Ait-Nouri': {
        description: "Algerian left-back signed from Wolves last summer. Quick, attacking, and a constant threat down the flank.",
        stats: { 'Appearances': 30, 'Goals': 2, 'Assists': 5, 'Clean Sheets': 11 }
    },
    'Josko Gvardiol': {
        description: "Versatile Croatian defender comfortable at centre-back or left-back. Strong in duels and increasingly involved in build-up play.",
        stats: { 'Appearances': 31, 'Goals': 3, 'Assists': 2, 'Clean Sheets': 12 }
    },
    'Abdukodir Khusanov': {
        description: "January 2025 signing from Lens. Aggressive, athletic, and rapidly maturing into a regular starter in his first full season.",
        stats: { 'Appearances': 26, 'Goals': 0, 'Assists': 1, 'Clean Sheets': 10 }
    },
    'Rico Lewis': {
        description: "Academy graduate who can play full-back or in midfield. Press-resistant and tactically smart beyond his years.",
        stats: { 'Appearances': 18, 'Goals': 1, 'Assists': 3, 'Clean Sheets': 7 }
    },
    'Rodri': {
        description: "Ballon d'Or winner and City's tactical heartbeat. His return to fitness has been pivotal to the club's title push.",
        stats: { 'Appearances': 24, 'Goals': 3, 'Assists': 4, 'Pass Accuracy': '93%' }
    },
    'Bernardo Silva': {
        description: "Captain of Manchester City. Tireless, technical, and tactically intelligent — the glue that holds Guardiola's system together.",
        stats: { 'Appearances': 34, 'Goals': 4, 'Assists': 7, 'Key Passes': 52 }
    },
    'Phil Foden': {
        description: "Stockport's finest. A creative spark capable of changing games — his backheel assist for Semenyo vs Palace was vintage Foden.",
        stats: { 'PL Goals': 7, 'All Comps Goals': 10, 'Appearances': 31, 'Assists': 9 }
    },
    'Tijjani Reijnders': {
        description: "Summer 2025 signing from AC Milan. A box-to-box presence who has brought energy and goals from midfield in his debut campaign.",
        stats: { 'Appearances': 27, 'Goals': 5, 'Assists': 4, 'Pass Accuracy': '89%' }
    },
    'Mateo Kovacic': {
        description: "Experienced Croatian midfielder. Reliable in possession and a calming influence in tight games.",
        stats: { 'Appearances': 20, 'Goals': 2, 'Assists': 3, 'Pass Accuracy': '91%' }
    },
    'Matheus Nunes': {
        description: "Powerful Portuguese midfielder who can also operate as a wing-back. Started in the dominant Palace win.",
        stats: { 'Appearances': 23, 'Goals': 1, 'Assists': 2, 'Pass Accuracy': '88%' }
    },
    'Rayan Cherki': {
        description: "Summer 2025 signing from Lyon. A magical playmaker still finding his feet in the Premier League but with moments of brilliance already.",
        stats: { 'Appearances': 19, 'Goals': 4, 'Assists': 6, 'Key Passes': 38 }
    },
    "Nico O'Reilly": {
        description: "Breakthrough academy product whose semi-final brace in the FA Cup run made him a fan favourite. Comfortable in midfield or at left-back.",
        stats: { 'PL Goals': 5, 'All Comps Goals': 6, 'Appearances': 33, 'Assists': 3 }
    },
    'Erling Haaland': {
        description: "Norwegian goal machine and Premier League record-breaker. The fastest player ever to reach 100 PL goals (in just 111 matches) and leading the 2025/26 Golden Boot race.",
        stats: { 'PL Goals': 26, 'All Comps Goals': 37, 'Appearances': 34, 'Assists': 8 }
    },
    'Omar Marmoush': {
        description: "January 2025 signing from Eintracht Frankfurt. Egyptian forward whose movement and finishing have made him a key second striker behind Haaland.",
        stats: { 'PL Goals': 4, 'All Comps Goals': 7, 'Appearances': 26, 'Assists': 5 }
    },
    'Jeremy Doku': {
        description: "Direct, electric Belgian winger. One-on-one nightmare for defenders and a key creative outlet on the left flank.",
        stats: { 'PL Goals': 5, 'All Comps Goals': 8, 'Appearances': 28, 'Assists': 7 }
    },
    'Savinho': {
        description: "Brazilian winger with the ability to beat his man and produce moments of magic. Scored in the recent Palace rout.",
        stats: { 'PL Goals': 3, 'All Comps Goals': 5, 'Appearances': 27, 'Assists': 6 }
    },
    'Antoine Semenyo': {
        description: "Ghanaian flyer who joined from Bournemouth in January 2026 and hit the ground running. Shortlisted for PL Player of the Season after a stunning split campaign across both clubs.",
        stats: { 'PL Goals': 16, 'All Comps Goals': 19, 'Appearances': 32, 'Assists': 6 }
    },
    'Pep Guardiola': {
        description: "Manager of Manchester City since 2016. Tactical innovator, six-time Premier League winner with City, and one of the most decorated managers in football history.",
        stats: { 'Games': 36, 'Wins': 23, 'Draws': 8, 'Losses': 5 }
    },
    'Jack Grealish': {
        description: "On loan at Everton for the 2025/26 season. Looking to rediscover his form before returning to the Etihad.",
        stats: { 'Club': 'Everton (loan)', 'Goals': 3, 'Assists': 6, 'Appearances': 28 }
    },
    'Manuel Akanji': {
        description: "On loan at Inter Milan for the season. Continuing to play at the highest level in Serie A and the Champions League.",
        stats: { 'Club': 'Inter Milan (loan)', 'Goals': 1, 'Assists': 1, 'Appearances': 30 }
    },
    'Vitor Reis': {
        description: "On loan at Girona to gain regular first-team minutes. The young Brazilian defender is one for the future.",
        stats: { 'Club': 'Girona (loan)', 'Goals': 1, 'Assists': 0, 'Appearances': 22 }
    }
};

// Player modal interactions
const modal = document.getElementById('player-modal');
const modalNumber = document.getElementById('player-modal-number');
const modalName = document.getElementById('player-modal-name');
const modalMeta = document.getElementById('player-modal-meta');
const modalDescription = document.getElementById('player-modal-description');
const modalStats = document.getElementById('player-modal-stats');
const modalOverlay = modal.querySelector('.player-modal-overlay');
const modalClose = modal.querySelector('.player-modal-close');

function openPlayerModal(card) {
    const nameEl = card.querySelector('.player-info h4');
    const metaEl = card.querySelector('.player-info p');
    const numberEl = card.querySelector('.player-number');
    if (!nameEl) return;

    // Strip captain marker etc.
    const rawName = nameEl.textContent.replace(/\s*\(C\)\s*/i, '').trim();
    const profile = playerProfiles[rawName];

    modalNumber.textContent = numberEl ? numberEl.textContent.trim() : '';
    modalName.textContent = rawName;
    modalMeta.textContent = metaEl ? metaEl.textContent.trim() : '';

    if (profile) {
        modalDescription.textContent = profile.description;
        modalStats.innerHTML = Object.entries(profile.stats).map(([label, value]) => `
            <div class="player-modal-stat">
                <span class="player-modal-stat-label">${label}</span>
                <span class="player-modal-stat-value">${value}</span>
            </div>
        `).join('');
    } else {
        modalDescription.textContent = 'Profile coming soon.';
        modalStats.innerHTML = '';
    }

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closePlayerModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

document.querySelectorAll('.player-card').forEach(card => {
    card.addEventListener('click', () => openPlayerModal(card));
});

modalOverlay.addEventListener('click', closePlayerModal);
modalClose.addEventListener('click', closePlayerModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closePlayerModal();
    }
});
