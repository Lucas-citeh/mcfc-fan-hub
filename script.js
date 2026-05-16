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
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Norway_Italy_-_June_2025_A_17_%28Gianluigi_Donnarumma%29.jpg/330px-Norway_Italy_-_June_2025_A_17_%28Gianluigi_Donnarumma%29.jpg',
        stats: { 'Appearances': 32, 'Clean Sheets': 13, 'Saves': 78, 'Goals Conceded': 32 }
    },
    'James Trafford': {
        description: "Homegrown shot-stopper back at the club after his time at Burnley. Provides reliable backup and continues to push for more minutes.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Queen_Park_Rangers_v_Burnley_26042025_%2825%29_%28James_Trafford%29.jpg/330px-Queen_Park_Rangers_v_Burnley_26042025_%2825%29_%28James_Trafford%29.jpg',
        stats: { 'Appearances': 6, 'Clean Sheets': 2, 'Saves': 14, 'Goals Conceded': 7 }
    },
    'Marcus Bettinelli': {
        description: "Experienced third-choice keeper and dressing-room presence. Rarely featured but a steady veteran option.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Marcus_Bettinelli_12-04-2014_1.jpg/330px-Marcus_Bettinelli_12-04-2014_1.jpg',
        stats: { 'Appearances': 1, 'Clean Sheets': 0, 'Saves': 2, 'Goals Conceded': 1 }
    },
    'Ruben Dias': {
        description: "Rock at the heart of City's defence. Captain material whose leadership and reading of the game underpin the back line.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Portugal_national_football_team_0866_%28R%C3%BAben_Dias%29.jpg',
        stats: { 'Appearances': 33, 'Goals': 1, 'Assists': 2, 'Clean Sheets': 13 }
    },
    'Marc Guehi': {
        description: "January 2026 signing from Crystal Palace. Has slotted seamlessly into the back four and formed a strong partnership with Dias.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Marc_Guehi_December_2018.jpg/330px-Marc_Guehi_December_2018.jpg',
        stats: { 'Appearances': 14, 'Goals': 0, 'Assists': 1, 'Clean Sheets': 6 }
    },
    'Rayan Ait-Nouri': {
        description: "Algerian left-back signed from Wolves last summer. Quick, attacking, and a constant threat down the flank.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rayan_A%C3%AFt-Nouri_playing_for_Algeria_in_2024.jpg/330px-Rayan_A%C3%AFt-Nouri_playing_for_Algeria_in_2024.jpg',
        stats: { 'Appearances': 30, 'Goals': 2, 'Assists': 5, 'Clean Sheets': 11 }
    },
    'Josko Gvardiol': {
        description: "Versatile Croatian defender comfortable at centre-back or left-back. Strong in duels and increasingly involved in build-up play.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2611_%28Jo%C5%A1ko_Gvardiol%29.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2611_%28Jo%C5%A1ko_Gvardiol%29.jpg',
        stats: { 'Appearances': 31, 'Goals': 3, 'Assists': 2, 'Clean Sheets': 12 }
    },
    'Abdukodir Khusanov': {
        description: "January 2025 signing from Lens. Aggressive, athletic, and rapidly maturing into a regular starter in his first full season.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Abdukodir_Khusanov_%28cropped%29.jpg',
        stats: { 'Appearances': 26, 'Goals': 0, 'Assists': 1, 'Clean Sheets': 10 }
    },
    'Rico Lewis': {
        description: "Academy graduate who can play full-back or in midfield. Press-resistant and tactically smart beyond his years.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ManCity20240722-027.jpg/330px-ManCity20240722-027.jpg',
        stats: { 'Appearances': 18, 'Goals': 1, 'Assists': 3, 'Clean Sheets': 7 }
    },
    'Rodri': {
        description: "Ballon d'Or winner and City's tactical heartbeat. His return to fitness has been pivotal to the club's title push.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg/330px-RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg',
        stats: { 'Appearances': 24, 'Goals': 3, 'Assists': 4, 'Pass Accuracy': '93%' }
    },
    'Phil Foden': {
        description: "Stockport's finest. A creative spark capable of changing games — his backheel assist for Semenyo vs Palace was vintage Foden.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg',
        stats: { 'PL Goals': 7, 'All Comps Goals': 10, 'Appearances': 31, 'Assists': 9 }
    },
    'Tijjani Reijnders': {
        description: "Summer 2025 signing from AC Milan. A box-to-box presence who has brought energy and goals from midfield in his debut campaign.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Reijnders_arriva_in_albergo_%28cropped%29.jpg/330px-Reijnders_arriva_in_albergo_%28cropped%29.jpg',
        stats: { 'Appearances': 27, 'Goals': 5, 'Assists': 4, 'Pass Accuracy': '89%' }
    },
    'Mateo Kovacic': {
        description: "Experienced Croatian midfielder. Reliable in possession and a calming influence in tight games.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Chelsea_vs._Arsenal%2C_29_May_2019_18_Kovacic.jpg/330px-Chelsea_vs._Arsenal%2C_29_May_2019_18_Kovacic.jpg',
        stats: { 'Appearances': 20, 'Goals': 2, 'Assists': 3, 'Pass Accuracy': '91%' }
    },
    'Matheus Nunes': {
        description: "Versatile Portuguese defender who can operate at right-back or as a wing-back. Athletic, press-resistant, and increasingly trusted in the back four. Started in the dominant Palace win.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Matheus_Nunes_USMNT_v_Portugal_Mar_31_2026-21_%28cropped%29.jpg/330px-Matheus_Nunes_USMNT_v_Portugal_Mar_31_2026-21_%28cropped%29.jpg',
        stats: { 'Appearances': 23, 'Goals': 1, 'Assists': 2, 'Pass Accuracy': '88%' }
    },
    'Rayan Cherki': {
        description: "Summer 2025 signing from Lyon. A magical playmaker still finding his feet in the Premier League but with moments of brilliance already.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cherki_asse_ol_2425.png/330px-Cherki_asse_ol_2425.png',
        stats: { 'Appearances': 19, 'Goals': 4, 'Assists': 6, 'Key Passes': 38 }
    },
    "Nico O'Reilly": {
        description: "Breakthrough academy product whose semi-final brace in the FA Cup run made him a fan favourite. Comfortable in midfield or at left-back.",
        stats: { 'PL Goals': 5, 'All Comps Goals': 6, 'Appearances': 33, 'Assists': 3 }
    },
    'Nico Gonzalez': {
        description: "Spanish midfielder signed from Porto in January 2025. A composed deep-lying playmaker who has stepped up during Rodri's absences and scored the decisive goal in the FA Cup semi-final win over Southampton.",
        stats: { 'Appearances': 24, 'Goals': 3, 'Assists': 4, 'Pass Accuracy': '91%' }
    },
    'Erling Haaland': {
        description: "Norwegian goal machine and Premier League record-breaker. The fastest player ever to reach 100 PL goals (in just 111 matches) and leading the 2025/26 Golden Boot race.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Erling_Haaland_June_2025.jpg/330px-Erling_Haaland_June_2025.jpg',
        stats: { 'PL Goals': 26, 'All Comps Goals': 37, 'Appearances': 34, 'Assists': 8 }
    },
    'Omar Marmoush': {
        description: "January 2025 signing from Eintracht Frankfurt. Egyptian forward whose movement and finishing have made him a key second striker behind Haaland.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/OmarMarmoush.png/330px-OmarMarmoush.png',
        stats: { 'PL Goals': 4, 'All Comps Goals': 7, 'Appearances': 26, 'Assists': 5 }
    },
    'Jeremy Doku': {
        description: "Direct, electric Belgian winger. One-on-one nightmare for defenders and a key creative outlet on the left flank.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/J%C3%A9r%C3%A9my_Doku_USMNT_v_Belgium_Mar_28_2026-27_%28cropped%29.jpg/330px-J%C3%A9r%C3%A9my_Doku_USMNT_v_Belgium_Mar_28_2026-27_%28cropped%29.jpg',
        stats: { 'PL Goals': 5, 'All Comps Goals': 8, 'Appearances': 28, 'Assists': 7 }
    },
    'Savinho': {
        description: "Brazilian winger with the ability to beat his man and produce moments of magic. Scored in the recent Palace rout.",
        stats: { 'PL Goals': 3, 'All Comps Goals': 5, 'Appearances': 27, 'Assists': 6 }
    },
    'Antoine Semenyo': {
        description: "Ghanaian flyer who joined from Bournemouth in January 2026 and hit the ground running. Scored the winner in the FA Cup Final and shortlisted for PL Player of the Season after a stunning split campaign across both clubs.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Antoine_Semenyo_2026.png/330px-Antoine_Semenyo_2026.png',
        stats: { 'PL Goals': 16, 'All Comps Goals': 20, 'Appearances': 33, 'Assists': 6 }
    },
    'Pep Guardiola': {
        description: "Manager of Manchester City since 2016. Tactical innovator, six-time Premier League winner with City, and one of the most decorated managers in football history.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2797_%28cropped%29.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2797_%28cropped%29.jpg',
        stats: { 'Games': 36, 'Wins': 23, 'Draws': 8, 'Losses': 5 }
    },
    'Jack Grealish': {
        description: "On loan at Everton for the 2025/26 season. Looking to rediscover his form before returning to the Etihad.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/ManCity20240722-017_%28cropped%29.jpg/330px-ManCity20240722-017_%28cropped%29.jpg',
        stats: { 'Club': 'Everton (loan)', 'Goals': 3, 'Assists': 6, 'Appearances': 28 }
    },
    'Manuel Akanji': {
        description: "On loan at Inter Milan for the season. Continuing to play at the highest level in Serie A and the Champions League.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2792_%28Manuel_Akanji%29.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2792_%28Manuel_Akanji%29.jpg',
        stats: { 'Club': 'Inter Milan (loan)', 'Goals': 1, 'Assists': 1, 'Appearances': 30 }
    },
    'Vitor Reis': {
        description: "On loan at Girona to gain regular first-team minutes. The young Brazilian defender is one for the future.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Vitor-Reis-Palmeiras-Sao-Paulo-ago24-2_%28cropped%29.jpg/330px-Vitor-Reis-Palmeiras-Sao-Paulo-ago24-2_%28cropped%29.jpg',
        stats: { 'Club': 'Girona (loan)', 'Goals': 1, 'Assists': 0, 'Appearances': 22 }
    }
};

// Player modal interactions
const modal = document.getElementById('player-modal');
const modalPhoto = document.getElementById('player-modal-photo');
const modalInitials = document.getElementById('player-modal-initials');
const modalNumber = document.getElementById('player-modal-number');
const modalName = document.getElementById('player-modal-name');
const modalMeta = document.getElementById('player-modal-meta');
const modalDescription = document.getElementById('player-modal-description');
const modalStats = document.getElementById('player-modal-stats');
const modalOverlay = modal.querySelector('.player-modal-overlay');
const modalClose = modal.querySelector('.player-modal-close');

function getInitials(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('');
}

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

    modalInitials.textContent = getInitials(rawName);
    if (profile && profile.photo) {
        modalPhoto.onerror = () => { modalPhoto.hidden = true; };
        modalPhoto.src = profile.photo;
        modalPhoto.alt = rawName;
        modalPhoto.hidden = false;
    } else {
        modalPhoto.hidden = true;
        modalPhoto.removeAttribute('src');
    }

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

// Match profiles — predictions, lineups, and results
const matchProfiles = {
    'palace-h': {
        competition: 'Premier League',
        title: 'Manchester City 3-0 Crystal Palace',
        meta: 'Etihad Stadium · Tue 13 May 2026 · FT',
        result: {
            home: 3, away: 0,
            scorers: 'Semenyo 32\', Marmoush 40\', Savinho 84\''
        },
        lineup: [
            { pos: 'GK', name: 'Donnarumma' },
            { pos: 'DEF', name: 'Khusanov' },
            { pos: 'DEF', name: 'Ait-Nouri' },
            { pos: 'DEF', name: 'Gvardiol' },
            { pos: 'DEF', name: 'Guehi' },
            { pos: 'MID', name: 'Bernardo Silva' },
            { pos: 'DEF', name: 'Matheus Nunes' },
            { pos: 'FWD', name: 'Semenyo' },
            { pos: 'FWD', name: 'Savinho' },
            { pos: 'FWD', name: 'Foden' },
            { pos: 'FWD', name: 'Marmoush' }
        ],
        subs: [
            { minute: 58, name: 'Doku' },
            { minute: 80, name: 'Cherki' },
            { minute: 80, name: 'Kovacic' },
            { minute: 85, name: 'Stones' }
        ],
        notes: 'Haaland rested as an unused substitute ahead of the FA Cup Final.'
    },
    'fa-cup-final': {
        competition: 'FA Cup Final',
        title: 'Manchester City 1-0 Chelsea',
        meta: 'Wembley Stadium · Sat 16 May 2026 · FT',
        lineupConfirmed: true,
        result: {
            home: 1, away: 0,
            scorers: "Semenyo 72'"
        },
        lineup: [
            { pos: 'GK', name: 'Trafford' },
            { pos: 'DEF', name: 'Matheus Nunes' },
            { pos: 'DEF', name: 'Khusanov' },
            { pos: 'DEF', name: 'Guehi' },
            { pos: 'DEF', name: "Nico O'Reilly" },
            { pos: 'MID', name: 'Rodri' },
            { pos: 'MID', name: 'Bernardo Silva (C)' },
            { pos: 'FWD', name: 'Semenyo' },
            { pos: 'FWD', name: 'Marmoush' },
            { pos: 'FWD', name: 'Doku' },
            { pos: 'FWD', name: 'Haaland' }
        ],
        subs: [
            { minute: 45, name: 'Cherki', on: 'Marmoush' },
            { minute: 62, name: 'Kovacic', on: 'Rodri' }
        ],
        notes: "Semenyo's stunning back-heel from a Haaland cutback won City the FA Cup and sealed the domestic double."
    },
    'bournemouth-a': {
        competition: 'Premier League',
        title: 'Bournemouth vs Manchester City',
        meta: 'Vitality Stadium · Tue 19 May 2026 · 20:00 UK',
        prediction: { city: 45.3, draw: 24.8, opp: 29.9, source: 'Opta supercomputer' },
        lineup: [
            { pos: 'GK', name: 'Donnarumma' },
            { pos: 'DEF', name: 'Khusanov' },
            { pos: 'DEF', name: 'Dias' },
            { pos: 'DEF', name: 'Gvardiol' },
            { pos: 'DEF', name: 'Ait-Nouri' },
            { pos: 'MID', name: 'Bernardo Silva' },
            { pos: 'MID', name: 'Reijnders' },
            { pos: 'MID', name: 'Foden' },
            { pos: 'FWD', name: 'Doku' },
            { pos: 'FWD', name: 'Haaland' },
            { pos: 'FWD', name: 'Semenyo' }
        ],
        notes: 'A must-win for City\'s title hopes — Arsenal lead by two points with two to play.'
    },
    'villa-h': {
        competition: 'Premier League',
        title: 'Manchester City vs Aston Villa',
        meta: 'Etihad Stadium · Sun 24 May 2026 · 16:00 UK',
        prediction: { city: 70, draw: 17, opp: 13, source: 'Estimate — Opta MD38 prediction not yet released' },
        lineup: [
            { pos: 'GK', name: 'Donnarumma' },
            { pos: 'DEF', name: 'Khusanov' },
            { pos: 'DEF', name: 'Dias' },
            { pos: 'DEF', name: 'Guehi' },
            { pos: 'DEF', name: 'Ait-Nouri' },
            { pos: 'MID', name: 'Bernardo Silva' },
            { pos: 'MID', name: 'Reijnders' },
            { pos: 'MID', name: 'Foden' },
            { pos: 'FWD', name: 'Doku' },
            { pos: 'FWD', name: 'Haaland' },
            { pos: 'FWD', name: 'Semenyo' }
        ],
        notes: 'Final day of the season — City need to win and hope Arsenal slip up at Palace.'
    }
};

const matchModal = document.getElementById('match-modal');
const matchModalComp = document.getElementById('match-modal-comp');
const matchModalTitle = document.getElementById('match-modal-title');
const matchModalMeta = document.getElementById('match-modal-meta');
const matchModalBody = document.getElementById('match-modal-body');
const matchModalLineupTitle = document.getElementById('match-modal-lineup-title');
const matchModalLineup = document.getElementById('match-modal-lineup');
const matchModalSubsTitle = document.getElementById('match-modal-subs-title');
const matchModalSubs = document.getElementById('match-modal-subs');
const matchModalNotes = document.getElementById('match-modal-notes');
const matchModalOverlay = matchModal.querySelector('.player-modal-overlay');
const matchModalClose = matchModal.querySelector('.player-modal-close');

function openMatchModal(matchId) {
    const data = matchProfiles[matchId];
    if (!data) return;

    matchModalComp.textContent = data.competition;
    matchModalTitle.textContent = data.title;
    matchModalMeta.textContent = data.meta;

    if (data.result) {
        matchModalBody.innerHTML = `
            <div class="match-result">
                <div class="match-result-score">${data.result.home} - ${data.result.away}</div>
                <div class="match-result-scorers">${data.result.scorers}</div>
            </div>`;
    } else if (data.prediction) {
        const p = data.prediction;
        matchModalBody.innerHTML = `
            <div class="match-prediction">
                <div class="match-prediction-title">Win Probability${p.source ? ` <span class="match-prediction-source">— ${p.source}</span>` : ''}</div>
                <div class="match-prediction-bar">
                    <div class="match-prediction-segment city" style="width:${p.city}%">${p.city}%</div>
                    <div class="match-prediction-segment draw" style="width:${p.draw}%">${p.draw}%</div>
                    <div class="match-prediction-segment opp" style="width:${p.opp}%">${p.opp}%</div>
                </div>
                <div class="match-prediction-legend">
                    <span>City</span><span>Draw</span><span>Opponent</span>
                </div>
            </div>`;
    } else {
        matchModalBody.innerHTML = '';
    }

    const lineupLabel = data.lineupConfirmed ? 'Starting Lineup'
        : (data.result ? 'Starting Lineup' : 'Predicted Lineup');
    matchModalLineupTitle.textContent = lineupLabel;
    matchModalLineup.innerHTML = data.lineup.map(p =>
        `<li data-pos="${p.pos}">${p.name}</li>`
    ).join('');

    if (data.subs && data.subs.length) {
        matchModalSubsTitle.hidden = false;
        matchModalSubs.innerHTML = data.subs.map(s =>
            `<li data-min="${s.minute}">${s.name}${s.on ? ` <span style="color:var(--gray);font-size:0.75rem">↔ ${s.on}</span>` : ''}</li>`
        ).join('');
    } else {
        matchModalSubsTitle.hidden = true;
        matchModalSubs.innerHTML = '';
    }

    matchModalNotes.textContent = data.notes || '';

    matchModal.classList.remove('hidden');
    matchModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
}

function closeMatchModal() {
    matchModal.classList.add('hidden');
    matchModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
}

document.querySelectorAll('.match-card[data-match-id]').forEach(card => {
    card.addEventListener('click', () => openMatchModal(card.dataset.matchId));
});

matchModalOverlay.addEventListener('click', closeMatchModal);
matchModalClose.addEventListener('click', closeMatchModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !matchModal.classList.contains('hidden')) {
        closeMatchModal();
    }
});

// Live score: append a "Live on FotMob" button to upcoming/in-play match cards.
// Static-site friendly — no API or iframe (FotMob blocks iframing). One click opens
// the live match page on FotMob in a new tab.
const FOTMOB_MAN_CITY_URL = 'https://www.fotmob.com/teams/8456/overview/manchester-city';

document.querySelectorAll('.match-card').forEach(card => {
    const statusEl = card.querySelector('.match-status');
    if (!statusEl) return;
    const status = statusEl.textContent.trim().toLowerCase();
    // Only on upcoming or currently in-play matches
    if (statusEl.classList.contains('upcoming') || statusEl.classList.contains('live')) {
        const link = document.createElement('a');
        link.href = card.dataset.fotmobUrl || FOTMOB_MAN_CITY_URL;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'live-score-button';
        link.innerHTML = '<span class="live-dot"></span>Live Score on FotMob ↗';
        // Stop card click (which opens modal) when clicking the button
        link.addEventListener('click', e => e.stopPropagation());
        card.appendChild(link);
    }
});
