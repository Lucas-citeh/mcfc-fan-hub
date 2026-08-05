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

// Player profiles — 2026/27 season
const playerProfiles = {
    'Gianluigi Donnarumma': {
        description: "Italy's no.1 between the sticks. Joined from PSG in summer 2025 and quickly cemented himself as City's first-choice keeper with commanding shot-stopping and presence in the box.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Norway_Italy_-_June_2025_A_17_%28Gianluigi_Donnarumma%29.jpg/330px-Norway_Italy_-_June_2025_A_17_%28Gianluigi_Donnarumma%29.jpg',
        stats: { 'Appearances': 0, 'Clean Sheets': 0, 'Saves': 0, 'Goals Conceded': 0 }
    },
    'James Trafford': {
        description: "Homegrown shot-stopper who deputised capably when called upon. With Donnarumma established as the undisputed no.1, Trafford is seeking regular first-team football elsewhere. City entered formal sale talks with Leeds United (July 2026) after Newcastle United pulled out — Trafford gave his full approval for a move to Elland Road. Fabrizio Romano issued his 'here we go' confirmation for the £40m deal. As of 4 August 2026, Leeds are clearing the way (Lucas Perri reported to be undergoing medical at Torino) and the formal announcement is expected imminently. City are already working on bringing in Gerónimo Rulli (Marseille) as backup cover. No official mancity.com announcement as of 5 August 2026.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Queen_Park_Rangers_v_Burnley_26042025_%2825%29_%28James_Trafford%29.jpg/330px-Queen_Park_Rangers_v_Burnley_26042025_%2825%29_%28James_Trafford%29.jpg',
        stats: { 'Appearances': 0, 'Clean Sheets': 0, 'Saves': 0, 'Goals Conceded': 0 }
    },
    'Marcus Bettinelli': {
        description: "Experienced third-choice keeper and dressing-room presence. Rarely featured but a steady veteran option.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Marcus_Bettinelli_12-04-2014_1.jpg/330px-Marcus_Bettinelli_12-04-2014_1.jpg',
        stats: { 'Appearances': 0, 'Clean Sheets': 0, 'Saves': 0, 'Goals Conceded': 0 }
    },
    'Pierce Charles': {
        description: "Summer 2026 signing from Sheffield Wednesday for £10m on a five-year deal. The goalkeeper joins City's ranks as long-term depth and will spend the 2026/27 season on loan at QPR in the Championship to gain regular first-team experience. Confirmed via mancity.com.",
        stats: { 'Appearances': 0, 'Clean Sheets': 0, 'Saves': 0, 'Status': 'On loan — QPR' }
    },
    'Ruben Dias': {
        description: "Signed a new four-year deal to June 2030 (confirmed July 2026, ESPN) — committed to the Enzo Maresca era and expected to captain the side. Rock at the heart of City's defence since joining from Benfica in 2020; Premier League Player of the Season in his debut campaign and a cornerstone of six title wins. His partnership with Marc Guehi gives City one of the Premier League's most formidable centre-back pairings.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Portugal_national_football_team_0866_%28R%C3%BAben_Dias%29.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Clean Sheets': 0 }
    },
    'Marc Guehi': {
        description: "January 2026 signing from Crystal Palace. Has slotted seamlessly into the back four and formed a strong partnership with Dias.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Marc_Guehi_December_2018.jpg/330px-Marc_Guehi_December_2018.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Clean Sheets': 0 }
    },
    'Rayan Ait-Nouri': {
        description: "Algerian left-back signed from Wolves last summer. Quick, attacking, and a constant threat down the flank.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Rayan_A%C3%AFt-Nouri_playing_for_Algeria_in_2024.jpg/330px-Rayan_A%C3%AFt-Nouri_playing_for_Algeria_in_2024.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Clean Sheets': 0 }
    },
    'Josko Gvardiol': {
        description: "Versatile Croatian defender comfortable at centre-back or left-back. Strong in duels and increasingly involved in build-up play. Signed a new contract until June 2031 on 15 June 2026 — ending Real Madrid speculation after Fabrizio Romano confirmed the deal as done and Jack Gaughan (Mail Sport) confirmed the renewal.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2611_%28Jo%C5%A1ko_Gvardiol%29.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2611_%28Jo%C5%A1ko_Gvardiol%29.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Clean Sheets': 0 }
    },
    'Abdukodir Khusanov': {
        description: "January 2025 signing from Lens. Aggressive, athletic, and rapidly maturing into a regular starter in his first full season.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Abdukodir_Khusanov_%28cropped%29.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Clean Sheets': 0 }
    },
    'Rico Lewis': {
        description: "Academy graduate who can play full-back or in midfield. Press-resistant and tactically smart beyond his years.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ManCity20240722-027.jpg/330px-ManCity20240722-027.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Clean Sheets': 0 }
    },
    'Nathan Aké': {
        description: "Left Manchester City on a permanent basis in summer 2026 after six years at the Etihad, joining Fenerbahce for £7m (rising to £8.5m). Won 12 trophies including the Treble (2022/23), four Premier League titles and the Champions League across 177 appearances. Sporting director Hugo Viana described him as 'an outstanding, model professional.'",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Nathan_Ak%C3%A9_2023.jpg/330px-Nathan_Ak%C3%A9_2023.jpg',
        stats: { 'Club': 'Fenerbahce (permanent)', 'Fee': '£7m', 'Departed': '4 July 2026', 'City Appearances': 177 }
    },
    'Rodri': {
        description: "Ballon d'Or winner, World Cup winner, Premier League champion, Champions League winner. Played the full 120 minutes as Spain beat Argentina 1-0 AET (Ferran Torres 106') in the 2026 World Cup Final at MetLife Stadium on 19 July. Underwent back surgery in Madrid on Monday 28 July; recovery estimated at 4–6 weeks. UPDATE (30 July): Real Madrid made their first formal approach to Manchester City, per Managing Madrid. UPDATE (1 Aug): PSG contacted City (CityXtra / Yahoo Sports); Rodri rejected PSG and Barcelona — holding out for Real Madrid only. UPDATE (2 Aug): City communicated revised asking price (Sky Sports / Forbes); deal 'on track at ~€65m' (Yahoo Sports). UPDATE (3–4 Aug): Per Yahoo Sports, CityXtra and OneFootball, Rodri has formally agreed personal terms with Real Madrid. Club-to-club negotiations ongoing — City asking ~€80m, Real Madrid offering ~€60–65m. FootballTransfers / Fabrizio Romano: 'Deal is on.' No official announcement as of 4 August 2026. Contract enters its final year.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg/330px-RODRI_-_SWE_vs_ESP_-_UEFA_EURO_2020_QUALIFIERS_-_2019.10.15_%28cropped%29.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Pass Accuracy': '–' }
    },
    'Phil Foden': {
        description: "Stockport's finest. Signed a new four-year contract until 2030 in May 2026, cementing his future at the Etihad through the Maresca era. A creative spark capable of changing games.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2613%2C_Phil_Foden.jpg',
        stats: { 'PL Goals': 0, 'All Comps Goals': 0, 'Appearances': 0, 'Assists': 0 }
    },
    'Tijjani Reijnders': {
        description: "Summer 2025 signing from AC Milan. A box-to-box presence who hit the ground running in his debut campaign. The Hard Tackle (20 July 2026) reports City have rebuffed interest and Newcastle have been priced out — Reijnders is expected to remain at the Etihad as part of Maresca's 2026/27 squad.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Reijnders_arriva_in_albergo_%28cropped%29.jpg/330px-Reijnders_arriva_in_albergo_%28cropped%29.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Pass Accuracy': '–' }
    },
    'Mateo Kovacic': {
        description: "Experienced Croatian midfielder. Reliable in possession and a calming influence in tight games.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Chelsea_vs._Arsenal%2C_29_May_2019_18_Kovacic.jpg/330px-Chelsea_vs._Arsenal%2C_29_May_2019_18_Kovacic.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Pass Accuracy': '–' }
    },
    'Matheus Nunes': {
        description: "Versatile Portuguese defender who can operate at right-back or as a wing-back. Athletic, press-resistant, and increasingly trusted in the back four.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Matheus_Nunes_USMNT_v_Portugal_Mar_31_2026-21_%28cropped%29.jpg/330px-Matheus_Nunes_USMNT_v_Portugal_Mar_31_2026-21_%28cropped%29.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Pass Accuracy': '–' }
    },
    'Rayan Cherki': {
        description: "Summer 2025 signing from Lyon. A magical playmaker still finding his feet in the Premier League but with moments of brilliance already.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Cherki_asse_ol_2425.png/330px-Cherki_asse_ol_2425.png',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Key Passes': 0 }
    },
    "Nico O'Reilly": {
        description: "Breakthrough academy product whose semi-final brace in the FA Cup run made him a fan favourite. Comfortable in midfield or at left-back. Officially signed a new contract with Manchester City in July 2026 — confirmed by mancity.com ('O'Reilly signs fresh City contract!'). The exact length and financial terms have not been disclosed.",
        stats: { 'PL Goals': 0, 'All Comps Goals': 0, 'Appearances': 0, 'Assists': 0 }
    },
    'Nico Gonzalez': {
        description: "Spanish midfielder signed from Porto in January 2025. A composed deep-lying playmaker who stepped up during Rodri's absences.",
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Pass Accuracy': '–' }
    },
    'Elliot Anderson': {
        description: "Club-record £116m signing from Nottingham Forest, confirmed July 2026. A box-to-box central midfielder ranked among the Premier League's elite for progressive carries, pressing intensity and late runs into the box. Five-year contract. Returned from England's World Cup semi-final campaign on 16 July — expected to begin integrating at Carrington ahead of the Community Shield on 16 August.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Elliot_Anderson_%28cropped%29.jpg/330px-Elliot_Anderson_%28cropped%29.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Pass Accuracy': '–' }
    },
    'Erling Haaland': {
        description: "Norwegian goal machine and Premier League record-breaker. The fastest player ever to reach 100 PL goals (in just 111 matches).",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Erling_Haaland_June_2025.jpg/330px-Erling_Haaland_June_2025.jpg',
        stats: { 'PL Goals': 0, 'All Comps Goals': 0, 'Appearances': 0, 'Assists': 0 }
    },
    'Omar Marmoush': {
        description: "January 2025 signing from Eintracht Frankfurt. Egyptian forward whose movement and finishing made him a key second striker behind Haaland — 16 goals and 6 assists in 61 City appearances. Future under Maresca is uncertain: Fabrizio Romano reports Tottenham are preparing an official bid (£51m), with Barcelona, Juventus, Aston Villa and Galatasaray also interested (July 2026). UPDATE 17 July: CityXtra report City are now 'planning to keep faith' with Marmoush for 2026/27 and have dropped plans to find a replacement — the situation has changed significantly.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/OmarMarmoush.png/330px-OmarMarmoush.png',
        stats: { 'PL Goals': 0, 'All Comps Goals': 0, 'Appearances': 0, 'Assists': 0 }
    },
    'Jeremy Doku': {
        description: "Direct, electric Belgian winger. One-on-one nightmare for defenders and a key creative outlet on the left flank. Fabrizio Romano confirmed on 19 June 2026 that City and Doku reached a verbal agreement on a new deal until 2031 — the 24-year-old declined interest from numerous clubs to prioritise the Etihad. Official announcement pending finalisation of admin and legal details.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/J%C3%A9r%C3%A9my_Doku_USMNT_v_Belgium_Mar_28_2026-27_%28cropped%29.jpg/330px-J%C3%A9r%C3%A9my_Doku_USMNT_v_Belgium_Mar_28_2026-27_%28cropped%29.jpg',
        stats: { 'PL Goals': 0, 'All Comps Goals': 0, 'Appearances': 0, 'Assists': 0 }
    },
    'Savinho': {
        description: "Brazilian winger with the ability to beat his man and produce moments of magic. The summer-long Tottenham transfer saga ended on 29 July 2026 when Manchester City officially confirmed Savinho has signed a new six-year contract at the Etihad, keeping him until summer 2031 with an option to extend by a further year. He declared 'City is the best club in the world' in his first interview following the announcement. Sources: mancity.com (official announcement — 29 July 2026); ESPN; Goal.com (Spurs dealt massive blow as transfer collapses).",
        stats: { 'PL Goals': 0, 'All Comps Goals': 0, 'Appearances': 0, 'Assists': 0 }
    },
    'Antoine Semenyo': {
        description: "Ghanaian flyer who joined from Bournemouth in January 2026 and hit the ground running. Scored the winner in the FA Cup Final and shortlisted for PL Player of the Season after a stunning split campaign.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Antoine_Semenyo_2026.png/330px-Antoine_Semenyo_2026.png',
        stats: { 'PL Goals': 0, 'All Comps Goals': 0, 'Appearances': 0, 'Assists': 0 }
    },
    'Pep Guardiola': {
        description: "Manager of Manchester City 2016–2026. Tactical innovator, six-time Premier League winner, Champions League winner (2023), and one of the most decorated managers in football history. Departed after 593 games following the 2025/26 season.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2797_%28cropped%29.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2797_%28cropped%29.jpg',
        stats: { 'Games': 593, 'Wins': 305, 'PL Titles': 6, 'Major Trophies': 20 }
    },
    'Enzo Maresca': {
        description: "Appointed Manchester City head coach on 26 May 2026 on a three-year deal. Served as Guardiola's assistant during the 2022/23 treble-winning season before managing Leicester City (Championship title) and Chelsea. Returns to the Etihad to lead a new era.",
        stats: { 'Role': 'Head Coach', 'Contract': 'Until 2029', 'Nationality': 'Italian', 'Previous Club': 'Chelsea' }
    },
    'Jack Grealish': {
        description: "Returned from his season-long loan at Everton after the 2025/26 season, during which he scored 2 goals and added 6 assists before suffering a stress fracture in January. Maresca has publicly stated he has a 'big heart' and plans to personally evaluate him during pre-season. City reportedly prefer a permanent exit over another loan; Everton retain interest in a second season loan but no arrangement has been confirmed for 2026/27 as of July 2026.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/ManCity20240722-017_%28cropped%29.jpg/330px-ManCity20240722-017_%28cropped%29.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Status': 'Returned from loan' }
    },
    'Manuel Akanji': {
        description: "Left Manchester City on a permanent basis in summer 2026 when Inter Milan triggered their mandatory €15m purchase option after winning Serie A.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2792_%28Manuel_Akanji%29.jpg/330px-2023-10-04_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2792_%28Manuel_Akanji%29.jpg',
        stats: { 'Club': 'Inter Milan (permanent)', 'Departed': 'Summer 2026' }
    },
    'Vitor Reis': {
        description: "Brazilian centre-back who returned from a successful 31-appearance La Liga season on loan at Girona and has been reintegrated into Enzo Maresca's first-team squad for 2026/27. Signed from Palmeiras in January 2025, the 20-year-old is regarded as one of the highest-ceiling young defenders in City's system and is targeting a regular role at the Etihad.",
        photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Vitor-Reis-Palmeiras-Sao-Paulo-ago24-2_%28cropped%29.jpg/330px-Vitor-Reis-Palmeiras-Sao-Paulo-ago24-2_%28cropped%29.jpg',
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Clean Sheets': 0 }
    },
    'Mathys Detourbet': {
        description: "19-year-old French left winger signed from CFG sister club Troyes on 27 June 2026 for €25m. Scored three goals as Troyes won Ligue 2 and secured promotion. On loan at Monaco for 2026/27 to develop at the top level before joining City's first team.",
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Status': 'On loan — Monaco' }
    },
    'Jeremy Monga': {
        description: "17-year-old English winger signed from Leicester City on 11 July 2026 for £10m (rising to £12.5m with add-ons) on a five-year deal to 2031. City beat Arsenal to his signature. Broke into Leicester's Championship first team in 2025/26, making 27 appearances. Stays in the first-team environment at the Etihad rather than going out on loan.",
        stats: { 'Appearances': 0, 'Goals': 0, 'Assists': 0, 'Status': 'New signing — 2026/27' }
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
            { minute: 64, name: 'Kovacic', on: 'Rodri' }
        ],
        notes: "Semenyo's stunning back-heel from a Haaland cutback won City the FA Cup and sealed the domestic double."
    },
    'bournemouth-a': {
        competition: 'Premier League',
        title: 'Bournemouth 1 - 1 Manchester City',
        meta: 'Vitality Stadium · Tue 19 May 2026 · FT',
        lineupConfirmed: true,
        result: {
            home: 1,
            away: 1,
            scorers: "Kroupi 39' (BOU), Haaland 90+5' (MCI)"
        },
        prediction: { city: 45.3, draw: 24.8, opp: 29.9, source: 'Opta supercomputer' },
        lineup: [
            { pos: 'GK', name: 'Donnarumma' },
            { pos: 'DEF', name: 'Matheus Nunes' },
            { pos: 'DEF', name: 'Khusanov' },
            { pos: 'DEF', name: 'Guehi' },
            { pos: 'DEF', name: "O'Reilly" },
            { pos: 'MID', name: 'Rodri' },
            { pos: 'MID', name: 'Kovacic' },
            { pos: 'MID', name: 'Bernardo Silva (C)' },
            { pos: 'FWD', name: 'Semenyo' },
            { pos: 'FWD', name: 'Haaland' },
            { pos: 'FWD', name: 'Doku' }
        ],
        subs: [
            { minute: 56, name: 'Foden', on: 'Kovacic' },
            { minute: 56, name: 'Savinho', on: 'Semenyo' },
            { minute: 56, name: 'Cherki', on: 'Bernardo Silva' },
            { minute: 76, name: 'Marmoush', on: 'Doku' }
        ],
        notes: "Haaland's 90+5 equaliser couldn't save City's title — Arsenal confirmed as Premier League champions after City were held to a 1-1 draw at the Vitality."
    },
    'villa-h': {
        competition: 'Premier League',
        title: 'Manchester City 1-2 Aston Villa',
        meta: 'Etihad Stadium · Sun 24 May 2026 · FT',
        lineupConfirmed: true,
        result: {
            home: 1, away: 2,
            scorers: "Semenyo 23' (MCI); Watkins 47', 61' (AVL)"
        },
        lineup: [
            { pos: 'GK', name: 'Trafford' },
            { pos: 'DEF', name: 'Lewis' },
            { pos: 'DEF', name: 'Stones' },
            { pos: 'DEF', name: 'Dias' },
            { pos: 'DEF', name: 'Aké' },
            { pos: 'MID', name: 'Bernardo Silva (C)' },
            { pos: 'MID', name: 'Nico Gonzalez' },
            { pos: 'FWD', name: 'Semenyo' },
            { pos: 'FWD', name: 'Reijnders' },
            { pos: 'FWD', name: 'Savinho' },
            { pos: 'FWD', name: 'Foden' }
        ],
        subs: [
            { minute: 58, name: 'Cherki', on: 'Semenyo' },
            { minute: 59, name: 'Kovacic', on: 'Bernardo Silva' },
            { minute: 77, name: 'Gvardiol', on: 'Stones' },
            { minute: 77, name: 'Ait-Nouri', on: 'Aké' },
            { minute: 77, name: 'Doku', on: 'Reijnders' }
        ],
        notes: "Guardiola's 593rd and final match in charge. Semenyo's 23rd-minute volley gave City the lead but Watkins struck twice (47', 61') to seal a Villa win. Bernardo Silva was subbed off at 59' to a guard of honour; Stones followed at 77' alongside a triple substitution. Haaland did not feature. City finish 2nd (78 pts) as FA Cup and EFL Cup winners."
    },
    'inter-preseason-2627': {
        competition: 'Pre-Season Friendly',
        title: 'Manchester City 1-1 Inter Milan (Inter win pens)',
        meta: 'Kai Tak Sports Park, Hong Kong · Sat 1 Aug 2026 · FT',
        lineupConfirmed: true,
        result: {
            home: 1, away: 1,
            scorers: "Mubama 14' (MCI); Pavard 20' (INT)"
        },
        lineup: [
            { pos: 'GK', name: 'Donnarumma' },
            { pos: 'DEF', name: 'Lewis' },
            { pos: 'DEF', name: 'Khusanov' },
            { pos: 'DEF', name: 'Gvardiol' },
            { pos: 'MID', name: 'Kovacic' },
            { pos: 'MID', name: 'Reijnders' },
            { pos: 'FWD', name: 'Foden' },
            { pos: 'FWD', name: 'Semenyo' },
            { pos: 'FWD', name: 'Savinho' },
            { pos: 'FWD', name: 'Mubama' }
        ],
        notes: "Enzo Maresca's first game as Manchester City head coach. Divin Mubama fired City ahead in the 14th minute from Antoine Semenyo's precise square ball after a driving run down the left. Benjamin Pavard equalised for Inter in the 20th minute. Inter Milan won the penalty shootout to claim the Asahi Super Dry Trophy. Semenyo was City's standout performer with an 8/10 rating across multiple assessments. Attendance: 42,286 at Kai Tak Sports Park. Sources: mancity.com match report; Yahoo Sports; football-italia.net."
    },
    'kleague-preseason-2627': {
        competition: 'Pre-Season Friendly',
        title: 'K League All-Stars 1-4 Manchester City',
        meta: 'Seoul World Cup Stadium, Seoul · Wed 5 Aug 2026 · FT',
        result: {
            home: 1, away: 4,
            scorers: 'Scorers unconfirmed'
        },
        lineup: [],
        notes: "City ran out comfortable 4-1 winners in Seoul in their second pre-season fixture of the Asia Tour. Individual scorers were not confirmed in verified post-match reports available at the time of this update. Source: YouTube highlights ('Manchester City vs K League All-Stars 4-1 – All Goals & Highlights – 2026')."
    },
    'atletico-preseason-2627': {
        competition: 'Pre-Season Friendly',
        title: 'Atlético Madrid vs Manchester City',
        meta: 'Seoul World Cup Stadium, Seoul · Sun 9 Aug 2026 · 13:00 BST',
        lineup: [],
        notes: 'Final pre-season fixture before the Community Shield. Part of the Coupang Play Series in Seoul. Sources: mancity.com; OneFootball.'
    },
    'community-shield-2026': {
        competition: 'FA Community Shield',
        title: 'Manchester City vs Arsenal',
        meta: 'Principality Stadium, Cardiff · Sun 16 Aug 2026 · 15:00 BST',
        lineup: [],
        notes: 'Lineup and predictions will be added closer to the match. Fixture confirmed by the FA in March 2026; Wembley unavailable due to concerts on 15–16 Aug.'
    },
    'bournemouth-h-2627': {
        competition: 'Premier League',
        title: 'Manchester City vs Bournemouth',
        meta: 'Etihad Stadium · Sun 23 Aug 2026 · 14:00 BST',
        lineup: [],
        notes: '2026/27 Premier League opener. First competitive game of the Enzo Maresca era at the Etihad.'
    },
    'palace-a-2627': {
        competition: 'Premier League',
        title: 'Crystal Palace vs Manchester City',
        meta: 'Selhurst Park · Sat 29 Aug 2026',
        lineup: [],
        notes: "Matchday 2 — City's first away trip of the 2026/27 season."
    },
    'coventry-h-2627': {
        competition: 'Premier League',
        title: 'Manchester City vs Coventry City',
        meta: 'Etihad Stadium · Sat 5 Sep 2026',
        lineup: [],
        notes: "Matchday 3 — newly promoted Coventry visit the Etihad."
    },
    'united-a-2627': {
        competition: 'Premier League',
        title: 'Manchester United vs Manchester City',
        meta: 'Old Trafford · Sat 12 Sep 2026',
        lineup: [],
        notes: 'Matchday 4 — first Manchester derby of the 2026/27 season.'
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

// Penalty Shootout Game
(function setupPenaltyGame() {
    const statusEl = document.getElementById('game-status');
    const cityScoreEl = document.getElementById('game-city-score');
    const oppScoreEl = document.getElementById('game-opp-score');
    const oppNameEl = document.getElementById('game-opp-name');
    const pickerEl = document.getElementById('game-opponent-picker');
    const goalEl = document.getElementById('game-goal');
    const ballEl = document.getElementById('game-ball');
    const keeperEl = document.getElementById('game-keeper');
    const keeperBadgeEl = document.getElementById('game-keeper-badge');
    const keeperShirtEl = document.getElementById('game-keeper-shirt');
    const keeperSleeveLEl = document.getElementById('game-keeper-sleeve-l');
    const keeperSleeveREl = document.getElementById('game-keeper-sleeve-r');
    const roundsEl = document.getElementById('game-rounds');
    const resetEl = document.getElementById('game-reset');
    const zones = goalEl.querySelectorAll('.game-zone');

    const ZONES = ['left', 'center', 'right'];
    const TOTAL_ROUNDS = 5;

    const CITY_BADGE = 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg';
    const CITY_KIT = '#6cabdd'; // sky blue keeper kit

    const TEAM_KITS = {
        'Chelsea':           { badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/330px-Chelsea_FC.svg.png',                kit: '#ffd83d' },
        'Arsenal':           { badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/330px-Arsenal_FC.svg.png',                kit: '#1f7a3d' },
        'Liverpool':         { badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/330px-Liverpool_FC.svg.png',            kit: '#ffd83d' },
        'Manchester United': { badge: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/330px-Manchester_United_FC_crest.svg.png', kit: '#1f7a3d' }
    };

    function setKeeperKit(team) {
        const kit = team === 'Manchester City'
            ? { badge: CITY_BADGE, kit: CITY_KIT }
            : (TEAM_KITS[team] || { badge: '', kit: '#ffd83d' });
        keeperBadgeEl.setAttributeNS('http://www.w3.org/1999/xlink', 'href', kit.badge);
        keeperBadgeEl.setAttribute('href', kit.badge);
        keeperShirtEl.setAttribute('fill', kit.kit);
        keeperSleeveLEl.setAttribute('fill', kit.kit);
        keeperSleeveREl.setAttribute('fill', kit.kit);
    }

    let state = null;

    function reset(opponent) {
        state = {
            opponent,
            cityScore: 0,
            oppScore: 0,
            round: 0,
            phase: 'city',
            rounds: []
        };
        oppNameEl.textContent = opponent;
        cityScoreEl.textContent = '0';
        oppScoreEl.textContent = '0';
        roundsEl.innerHTML = '';
        resetEl.hidden = true;
        pickerEl.hidden = true;
        goalEl.hidden = false;
        // Keeper always visible from game start, defaults to center
        keeperEl.hidden = false;
        keeperEl.className = 'game-keeper center';
        nextTurn();
    }

    function nextTurn() {
        // End of regulation: if scores differ, game over. Otherwise go to sudden death.
        // In sudden death, end as soon as scores differ at the end of a round.
        if (state.round >= TOTAL_ROUNDS && state.phase === 'city' && state.cityScore !== state.oppScore) {
            return endGame();
        }
        ballEl.hidden = true;
        ballEl.className = 'game-ball';
        keeperEl.className = 'game-keeper center';
        enableZones();
        const isSD = state.round >= TOTAL_ROUNDS;
        const label = isSD ? `Sudden Death (round ${state.round - TOTAL_ROUNDS + 1})` : `Round ${state.round + 1}`;
        if (state.phase === 'city') {
            // City shoots — opponent's keeper in goal
            setKeeperKit(state.opponent);
            statusEl.textContent = `${label}: City shoots — pick a corner!`;
        } else {
            // Opponent shoots — City's keeper in goal (you)
            setKeeperKit('Manchester City');
            statusEl.textContent = `${label}: ${state.opponent} shoots — dive!`;
        }
    }

    function enableZones() { zones.forEach(z => z.classList.remove('disabled')); }
    function disableZones() { zones.forEach(z => z.classList.add('disabled')); }

    function randomZone() {
        return ZONES[Math.floor(Math.random() * ZONES.length)];
    }

    function renderRoundsBar() {
        roundsEl.innerHTML = '';
        const total = Math.max(TOTAL_ROUNDS, state.rounds.length);

        function row(label, key) {
            const tr = document.createElement('div');
            tr.className = 'game-rounds-row';
            const lbl = document.createElement('span');
            lbl.className = 'game-rounds-label';
            lbl.textContent = label;
            tr.appendChild(lbl);
            for (let i = 0; i < total; i++) {
                const r = state.rounds[i] || {};
                const m = document.createElement('div');
                m.className = 'game-round-marker' + (r[key] ? ' ' + r[key] : '');
                if (i >= TOTAL_ROUNDS) m.classList.add('sudden-death');
                tr.appendChild(m);
            }
            return tr;
        }

        roundsEl.appendChild(row('City', 'city'));
        roundsEl.appendChild(row(state.opponent, 'opp'));
    }

    function handleZoneClick(choice) {
        if (!state) return;
        disableZones();
        if (state.phase === 'city') {
            // User is striker. Random keeper dive.
            const keeperDive = randomZone();
            const scored = keeperDive !== choice;
            ballEl.className = 'game-ball ' + choice;
            ballEl.hidden = false;
            keeperEl.className = 'game-keeper ' + keeperDive;
            setTimeout(() => {
                if (scored) {
                    state.cityScore++;
                    cityScoreEl.textContent = state.cityScore;
                    statusEl.textContent = '⚽ GOAL!';
                } else {
                    statusEl.textContent = '🧤 SAVED!';
                }
                state.rounds[state.round] = state.rounds[state.round] || {};
                state.rounds[state.round].city = scored ? 'goal' : 'miss';
                renderRoundsBar();
                state.phase = 'opp';
                setTimeout(nextTurn, 1400);
            }, 500);
        } else {
            // User is keeper. Random striker shot.
            const shot = randomZone();
            const saved = shot === choice;
            ballEl.className = 'game-ball ' + shot;
            ballEl.hidden = false;
            keeperEl.className = 'game-keeper ' + choice;
            setTimeout(() => {
                if (!saved) {
                    state.oppScore++;
                    oppScoreEl.textContent = state.oppScore;
                    statusEl.textContent = `⚽ ${state.opponent} scores!`;
                } else {
                    statusEl.textContent = '🧤 BIG SAVE!';
                }
                state.rounds[state.round] = state.rounds[state.round] || {};
                state.rounds[state.round].opp = saved ? 'miss' : 'goal';
                renderRoundsBar();
                state.round++;
                state.phase = 'city';
                setTimeout(nextTurn, 1400);
            }, 500);
        }
    }

    function endGame() {
        ballEl.hidden = true;
        keeperEl.className = 'game-keeper center';
        disableZones();
        if (state.cityScore > state.oppScore) {
            statusEl.textContent = `🏆 City win ${state.cityScore}-${state.oppScore}!`;
        } else {
            statusEl.textContent = `😢 ${state.opponent} win ${state.oppScore}-${state.cityScore}`;
        }
        resetEl.hidden = false;
    }

    pickerEl.addEventListener('click', e => {
        const btn = e.target.closest('.game-opp-btn');
        if (!btn) return;
        reset(btn.dataset.opp);
    });

    zones.forEach(z => z.addEventListener('click', () => handleZoneClick(z.dataset.zone)));

    resetEl.addEventListener('click', () => {
        goalEl.hidden = true;
        pickerEl.hidden = false;
        resetEl.hidden = true;
        roundsEl.innerHTML = '';
        cityScoreEl.textContent = '0';
        oppScoreEl.textContent = '0';
        statusEl.textContent = 'Pick your opponent to start';
        keeperEl.hidden = true;
        ballEl.hidden = true;
        state = null;
    });
})();

// Score Predictor
(function setupScorePredictor() {
    const listEl = document.getElementById('predictor-list');
    const pointsEl = document.getElementById('predictor-points');
    const tierEl = document.getElementById('predictor-tier');
    const celebEl = document.getElementById('predictor-celebration');
    const celebTextEl = document.getElementById('predictor-celebration-text');
    const STORAGE_KEY = 'mcfc-predictions';
    const TIER_KEY = 'mcfc-tier-reached';

    const TIERS = [
        { min: 100, label: 'Pep Disciple', msg: 'Pep would be proud!' },
        { min: 50,  label: 'Sky Blue Oracle', msg: 'You\'re reading the game like Bernardo!' },
        { min: 20,  label: 'Etihad Expert', msg: 'Etihad Expert unlocked — top of the leaderboard!' },
        { min: 10,  label: 'Predicting Pro', msg: 'Predicting Pro! You\'re on a roll.' },
        { min: 5,   label: 'Rising Talent', msg: 'Nice start — Rising Talent earned!' }
    ];

    function currentTier(points) {
        return TIERS.find(t => points >= t.min) || null;
    }

    function loadPredictions() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        } catch { return {}; }
    }

    function savePredictions(p) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    }

    // 5 = exact, 2 = correct outcome + at least one score right, 1 = outcome only, 0 = miss
    function scorePrediction(pred, result) {
        if (!pred || !result) return 0;
        if (pred.home === result.home && pred.away === result.away) return 5;
        const predOutcome = Math.sign(pred.home - pred.away);
        const realOutcome = Math.sign(result.home - result.away);
        if (predOutcome !== realOutcome) return 0;
        if (pred.home === result.home || pred.away === result.away) return 2;
        return 1;
    }

    function render() {
        listEl.innerHTML = '';
        const predictions = loadPredictions();
        let totalPoints = 0;

        Object.entries(matchProfiles).forEach(([id, match]) => {
            // Parse the home/away teams from the title (format: "Home vs Away" or "Home X-Y Away")
            // Fall back to scraping from #matches if title is ambiguous.
            const card = document.querySelector(`.match-card[data-match-id="${id}"]`);
            if (!card) return;
            const homeName = card.querySelector('.team.home .team-name')?.textContent.trim();
            const awayName = card.querySelector('.team:not(.home) .team-name')?.textContent.trim();
            if (!homeName || !awayName) return;

            const pred = predictions[id];
            const wrap = document.createElement('div');
            wrap.className = 'predictor-card';

            const title = document.createElement('div');
            title.className = 'predictor-match-name';
            title.textContent = `${homeName} vs ${awayName}`;
            const meta = document.createElement('div');
            meta.className = 'predictor-match-meta';
            meta.textContent = match.meta || match.competition || '';
            wrap.appendChild(title);
            wrap.appendChild(meta);

            const inputs = document.createElement('div');
            inputs.className = 'predictor-inputs';
            inputs.innerHTML = `
                <div class="predictor-team">
                    <span class="predictor-team-name">${homeName}</span>
                    <input class="predictor-input" type="number" min="0" max="20" data-side="home" value="${pred?.home ?? ''}">
                </div>
                <span class="predictor-dash">–</span>
                <div class="predictor-team">
                    <input class="predictor-input" type="number" min="0" max="20" data-side="away" value="${pred?.away ?? ''}">
                    <span class="predictor-team-name">${awayName}</span>
                </div>
                <button class="predictor-save${pred ? ' saved' : ''}">${pred ? 'Saved' : 'Save'}</button>
            `;
            wrap.appendChild(inputs);

            const homeIn = inputs.querySelector('[data-side="home"]');
            const awayIn = inputs.querySelector('[data-side="away"]');
            const saveBtn = inputs.querySelector('.predictor-save');

            // Lock inputs once the match has a result
            if (match.result) {
                homeIn.disabled = true;
                awayIn.disabled = true;
                saveBtn.disabled = true;
                saveBtn.style.display = 'none';
            }

            saveBtn.addEventListener('click', () => {
                const h = parseInt(homeIn.value, 10);
                const a = parseInt(awayIn.value, 10);
                if (Number.isNaN(h) || Number.isNaN(a)) return;
                const all = loadPredictions();
                all[id] = { home: h, away: a };
                savePredictions(all);
                saveBtn.textContent = 'Saved';
                saveBtn.classList.add('saved');
            });

            [homeIn, awayIn].forEach(inp => inp.addEventListener('input', () => {
                saveBtn.textContent = 'Save';
                saveBtn.classList.remove('saved');
            }));

            if (match.result) {
                const pts = scorePrediction(pred, match.result);
                totalPoints += pts;
                const res = document.createElement('div');
                res.className = 'predictor-result ' + (pts === 5 ? 'exact' : pts > 0 ? 'partial' : 'miss');
                const actualText = `Result: ${match.result.home}–${match.result.away}` +
                    (pred ? ` · Your guess: ${pred.home}–${pred.away}` : ' · No prediction');
                res.innerHTML = `<span>${actualText}</span><span class="predictor-result-points">+${pts} pts</span>`;
                wrap.appendChild(res);
            }

            listEl.appendChild(wrap);
        });

        pointsEl.textContent = totalPoints;

        // Tier badge + celebration on level-up
        const tier = currentTier(totalPoints);
        if (tier) {
            tierEl.hidden = false;
            tierEl.textContent = tier.label;
        } else {
            tierEl.hidden = true;
        }

        const previouslyReached = parseInt(localStorage.getItem(TIER_KEY) || '0', 10);
        const reachedNow = tier ? tier.min : 0;
        if (reachedNow > previouslyReached) {
            celebEl.hidden = false;
            celebTextEl.textContent = tier.msg;
            localStorage.setItem(TIER_KEY, String(reachedNow));
        } else if (tier) {
            // Keep banner visible only briefly when freshly achieved; otherwise hide
            celebEl.hidden = true;
        } else {
            celebEl.hidden = true;
        }
    }

    render();
})();
