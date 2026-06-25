// --- Multilingual Translations Database ---
const translations = {
  en: {
    "landing-hero-title": "Fear of STEM?<br>Turn Learning into Adventure!",
    "landing-hero-subtitle": "Learn Science, Math, Physics, and Coding through gamified missions, unlock levels, build real circuits in the lab, and solve doubts with your personal AI Tutor.",
    "landing-cta-start": "Start Quest Free",
    "landing-cta-ai": "Ask AI Tutor",
    "stat-students": "Rural Students Enrolled",
    "stat-quizzes": "Quizzes Solved",
    "stat-missions": "Missions Finished",
    "stat-lessons": "Bite-sized Lessons",
    "categories-title": "Select Your Learning Track",
    "cat-68-desc": "Foundation STEM: Algebra basics, simple forces, cell structures, and plant cycles.",
    "cat-910-desc": "Board Prep + Concepts: Quadratic equations, optics, chemistry reactions, and biology organs.",
    "cat-1112-desc": "Advanced STEM: Electromagnetism, organic structures, integral calculus, and genetics.",
    "dash-title": "Missions Hub",
    "dash-subtitle": "Embark on concept adventures to earn XP and level up!",
    "dash-level-title": "STEM Explorer",
    "subjects-heading": "Select Subject Quest",
    "subject-math-title": "Algebra Arena",
    "subject-math-desc": "Topic: Variables & Equations • Defeat the Algebra Monster to secure the mathematical balance!",
    "subject-physics-title": "Gravity Challenge",
    "subject-physics-desc": "Topic: Newton's Laws of Motion • Mission: Launch the Space Rocket safely through gravitational pulls!",
    "subject-chemistry-title": "Atom Lab reaction",
    "subject-chemistry-desc": "Topic: Molecular Bonding • Assemble correct atom bonds to trigger high-energy reactions.",
    "subject-biology-title": "Cell Explorer",
    "subject-biology-desc": "Topic: Plant vs Animal Cell • Navigate inside the microscope to identify organelles and cell walls.",
    "challenges-heading": "Daily Quests",
    "ch1-title": "Complete 1 Quiz",
    "ch2-title": "Light bulb in Circuit Lab",
    "ch3-title": "Ask AI Tutor 1 Doubt",
    "rewards-heading": "My Trophies",
    "active-quest-title": "Active Quest: Newton's Gravity",
    "active-quest-subtitle": "Solve problems to rescue the rocket!",
    "quest-btn-hint": "Get AI Hint",
    "quest-btn-next": "Next Challenge",
    "victory-title": "Quest Accomplished!",
    "victory-subtitle": "The spaceship escaped the gravity trap! Excellent application of Newton's First Law.",
    "victory-btn-close": "Claim Rewards",
    "lab-subtitle": "Design circuits and experiment with physical variables dynamically.",
    "lab-circuit-title": "Experiment: Electric Circuit Builder",
    "lbl-battery": "Battery",
    "lbl-bulb": "Light Bulb",
    "lbl-resistor": "Resistor",
    "lbl-switch": "Switch: OFF",
    "lab-panel-controls": "Variable Control",
    "lab-label-voltage": "Voltage (V)",
    "lab-label-resistance": "Resistance (R)",
    "lab-panel-formula": "Ohm's Law Engine (V = I * R)",
    "lab-calc-v": "Voltage (V)",
    "lab-calc-r": "Resistance (R)",
    "lab-calc-i": "Current (I = V / R)",
    "lab-btn-verify": "Verify Circuit",
    "ai-subtitle": "Solve concepts or get solutions instantly in your local language.",
    "ai-presets-title": "Common STEM Doubts",
    "ai-status": "Online • Multi-language enabled",
    "leaderboard-subtitle": "Compete with friends in your school, village, or district!",
    "lb-col-rank": "Rank",
    "lb-col-student": "Student",
    "lb-col-class": "Class",
    "lb-col-xp": "XP Points",
    "lb-col-streak": "Active Streak",
    "analytics-subtitle": "Track your concepts mastered, study hours, and fear reduction stats.",
    "anal-chart-title": "Daily Study Hours (Weekly Trend)",
    "anal-fear-title": "STEM Subject Fear Index",
    "anal-fear-desc": "Lower dial values indicate higher confidence and reduced anxiety!",
    "fear-level-label": "Mild Anxiety"
  },
  hi: {
    "landing-hero-title": "विज्ञान-गणित से डर?<br>पढ़ाई को बनाओ रोमांचक खेल!",
    "landing-hero-subtitle": "मजेदार मिशनों के माध्यम से विज्ञान, गणित, भौतिकी और कोडिंग सीखें, स्तरों को अनलॉक करें, प्रयोगशाला में वास्तविक सर्किट बनाएं, और अपने निजी एआई ट्यूटर से संदेह हल करें।",
    "landing-cta-start": "मुफ़्त शुरू करें",
    "landing-cta-ai": "एआई गुरु से पूछें",
    "stat-students": "ग्रामीण छात्र नामांकित",
    "stat-quizzes": "प्रश्नोत्तरी हल की गई",
    "stat-missions": "मिशन पूरे हुए",
    "stat-lessons": "छोटे पाठ",
    "categories-title": "अपनी पढ़ाई का ट्रैक चुनें",
    "cat-68-desc": "बुनियादी विज्ञान-गणित: बीजगणित, सरल बल, कोशिका संरचना और पौधे चक्र।",
    "cat-910-desc": "बोर्ड परीक्षा तैयारी + अवधारणाएँ: द्विघात समीकरण, प्रकाशिकी, रासायनिक प्रतिक्रियाएं और जीव विज्ञान अंग।",
    "cat-1112-desc": "उन्नत विज्ञान-गणित: विद्युत चुंबकत्व, कार्बनिक संरचनाएं, समाकलन गणित और आनुवंशिकी।",
    "dash-title": "मिशन हब",
    "dash-subtitle": "अनुभव अंक (XP) अर्जित करने और स्तर बढ़ाने के लिए साहसिक यात्रा शुरू करें!",
    "dash-level-title": "विज्ञान खोजकर्ता",
    "subjects-heading": "विषय मिशन चुनें",
    "subject-math-title": "बीजगणित अखाड़ा",
    "subject-math-desc": "विषय: चर और समीकरण • गणितीय संतुलन सुरक्षित करने के लिए बीजगणित राक्षस को हराएं!",
    "subject-physics-title": "गुरुत्वाकर्षण चुनौती",
    "subject-physics-desc": "विषय: न्यूटन के गति के नियम • मिशन: रॉकेट को गुरुत्वाकर्षण खिंचाव से बचाकर लॉन्च करें!",
    "subject-chemistry-title": "परमाणु प्रयोगशाला",
    "subject-chemistry-desc": "विषय: आणविक बंधन • उच्च ऊर्जा प्रतिक्रियाओं को शुरू करने के लिए सही परमाणु बंधनों को जोड़ें।",
    "subject-biology-title": "कोशिका खोजकर्ता",
    "subject-biology-desc": "विषय: पादप बनाम जंतु कोशिका • अंगकों और कोशिका भित्तियों की पहचान करने के लिए सूक्ष्मदर्शी में खोजें।",
    "challenges-heading": "दैनिक मिशन",
    "ch1-title": "1 प्रश्नोत्तरी पूरी करें",
    "ch2-title": "सर्किट लैब में बल्ब जलाएं",
    "ch3-title": "एआई ट्यूटर से 1 शंका पूछें",
    "rewards-heading": "मेरे मेडल",
    "active-quest-title": "सक्रिय मिशन: न्यूटन का गुरुत्वाकर्षण",
    "active-quest-subtitle": "रॉकेट को बचाने के लिए समस्याओं को हल करें!",
    "quest-btn-hint": "एआई संकेत लें",
    "quest-btn-next": "अगली चुनौती",
    "victory-title": "मिशन सफल!",
    "victory-subtitle": "अंतरिक्ष यान गुरुत्वाकर्षण जाल से बच निकला! न्यूटन के पहले नियम का उत्कृष्ट अनुप्रयोग।",
    "victory-btn-close": "पुरस्कार लें",
    "lab-subtitle": "सर्किट डिजाइन करें और भौतिक चरों के साथ गतिशील रूप से प्रयोग करें।",
    "lab-circuit-title": "प्रयोग: विद्युत सर्किट निर्माता",
    "lbl-battery": "बैटरी",
    "lbl-bulb": "बिजली का बल्ब",
    "lbl-resistor": "प्रतिरोधक",
    "lbl-switch": "स्विच: बंद",
    "lab-panel-controls": "चर नियंत्रण",
    "lab-label-voltage": "वोल्टेज (V)",
    "lab-label-resistance": "प्रतिरोध (R)",
    "lab-panel-formula": "ओह्म का नियम (V = I * R)",
    "lab-calc-v": "वोल्टेज (V)",
    "lab-calc-r": "प्रतिरोध (R)",
    "lab-calc-i": "विद्युत धारा (I = V / R)",
    "lab-btn-verify": "सर्किट की जाँच करें",
    "ai-subtitle": "अपनी स्थानीय भाषा में तुरंत अवधारणाओं को समझें या समाधान प्राप्त करें।",
    "ai-presets-title": "सामान्य विज्ञान शंकाएं",
    "ai-status": "सक्रिय • बहुभाषी समर्थित",
    "leaderboard-subtitle": "अपने स्कूल, गाँव या जिले के दोस्तों के साथ प्रतिस्पर्धा करें!",
    "lb-col-rank": "रैंक",
    "lb-col-student": "छात्र",
    "lb-col-class": "कक्षा",
    "lb-col-xp": "XP अंक",
    "lb-col-streak": "सक्रिय स्ट्रीक",
    "analytics-subtitle": "अपनी सीखी हुई अवधारणाओं, अध्ययन के घंटे और कम होते डर को ट्रैक करें।",
    "anal-chart-title": "दैनिक अध्ययन के घंटे (साप्ताहिक रुझान)",
    "anal-fear-title": "विषय भय सूचकांक",
    "anal-fear-desc": "कम डायल मान अधिक आत्मविश्वास और कम चिंता दर्शाते हैं!",
    "fear-level-label": "हल्की चिंता"
  },
  mr: {
    "landing-hero-title": "विज्ञान-गणिताची भीती?<br>अभ्यासाला बनवा खेळाचा थरार!",
    "landing-hero-subtitle": "खेळांसारख्या मिशनद्वारे विज्ञान, गणित, भौतिकशास्त्र आणि कोडिंग शिका, स्तर अनलॉक करा, प्रयोगशाळेत प्रत्यक्ष सर्किट बनवा आणि एआय ट्यूटरकडून शंका सोडवा.",
    "landing-cta-start": "मोफत सुरू करा",
    "landing-cta-ai": "एआय ट्यूटरला विचारा",
    "stat-students": "ग्रामीण विद्यार्थी दाखल",
    "stat-quizzes": "प्रश्नमंजुषा सोडवल्या",
    "stat-missions": "मिशन पूर्ण झाले",
    "stat-lessons": "लहान पाठ",
    "categories-title": "तुमचा अभ्यासाचा मार्ग निवडा",
    "cat-68-desc": "पायाभूत विज्ञान-गणित: बीजगणिताची मूलभूत माहिती, साधी बले, पेशींची रचना आणि वनस्पतींचे चक्र.",
    "cat-910-desc": "बोर्ड परीक्षा तयारी + संकल्पना: वर्गसमीकरणे, प्रकाशशास्त्र, रासायनिक अभिक्रिया आणि जीवशास्त्रातील अवयव.",
    "cat-1112-desc": "प्रगत विज्ञान-गणित: विद्युतचुंबकत्व, सेंद्रिय रचना, संकलन गणित आणि अनुवंशशास्त्र.",
    "dash-title": "मिशन हब",
    "dash-subtitle": "XP गुण मिळवण्यासाठी आणि स्तर वाढवण्यासाठी साहसी प्रवास सुरू करा!",
    "dash-level-title": "विज्ञान संशोधक",
    "subjects-heading": "विषयाचे मिशन निवडा",
    "subject-math-title": "बीजगणित आखाडा",
    "subject-math-desc": "विषय: चल आणि समीकरणे • गणितीय संतुलन राखण्यासाठी बीजगणित राक्षसाला हरवा!",
    "subject-physics-title": "गुरुत्वाकर्षण आव्हान",
    "subject-physics-desc": "विषय: न्यूटनचे गतीचे नियम • मिशन: अंतराळ रॉकेटला गुरुत्वाकर्षण ओढीतून सुरक्षितपणे सोडवा!",
    "subject-chemistry-title": "अणू प्रयोगशाळा अभिक्रिया",
    "subject-chemistry-desc": "विषय: अणूंचे बंध • उच्च-ऊर्जा अभिक्रिया सुरू करण्यासाठी अचूक अणू बंध जुळवा.",
    "subject-biology-title": "पेशी संशोधक",
    "subject-biology-desc": "विषय: वनस्पती विरुद्ध प्राणी पेशी • सूक्ष्मदर्शकाखाली पेशींच्या भिंती आणि अंगके ओळखा.",
    "challenges-heading": "दैनिक आव्हाने",
    "ch1-title": "१ प्रश्नमंजुषा पूर्ण करा",
    "ch2-title": "सर्किट लॅबमध्ये बल्ब पेटवा",
    "ch3-title": "एआय ट्यूटरला १ शंका विचारा",
    "rewards-heading": "माझी पदके",
    "active-quest-title": "सक्रिय मिशन: न्यूटनचे गुरुत्वाकर्षण",
    "active-quest-subtitle": "रॉकेट वाचवण्यासाठी प्रश्न सोडवा!",
    "quest-btn-hint": "एआय संकेत घ्या",
    "quest-btn-next": "पुढचे आव्हान",
    "victory-title": "मिशन फत्ते!",
    "victory-subtitle": "रॉकेट गुरुत्वाकर्षण जाळ्यातून सुटले! न्यूटनच्या पहिल्या नियमाचा उत्कृष्ट वापर.",
    "victory-btn-close": "बक्षिसे घ्या",
    "lab-subtitle": "सर्किट डिझाइन करा आणि भौतिक बदलांचे प्रयोग थेट अनुभवा.",
    "lab-circuit-title": "प्रयोग: विद्युत सर्किट रचना",
    "lbl-battery": "बॅटरी",
    "lbl-bulb": "विजेचा दिवा",
    "lbl-resistor": "रोधक",
    "lbl-switch": "स्विच: बंद",
    "lab-panel-controls": "चल नियंत्रण",
    "lab-label-voltage": "विभवांतर / व्होल्टेज (V)",
    "lab-label-resistance": "रोड / रेझिस्टन्स (R)",
    "lab-panel-formula": "ओहमचा नियम (V = I * R)",
    "lab-calc-v": "व्होल्टेज (V)",
    "lab-calc-r": "रेझिस्टन्स (R)",
    "lab-calc-i": "विद्युत प्रवाह (I = V / R)",
    "lab-btn-verify": "सर्किट तपासा",
    "ai-subtitle": "तुमच्या स्थानिक भाषेत तात्काळ संकल्पना समजून घ्या किंवा उत्तरे मिळवा.",
    "ai-presets-title": "नेहमीचे विज्ञान प्रश्न",
    "ai-status": "सक्रिय • बहुभाषिक ट्यूटर",
    "leaderboard-subtitle": "तुमच्या शाळा, गाव किंवा जिल्ह्यातील मित्रांशी स्पर्धा करा!",
    "lb-col-rank": "क्रमांक",
    "lb-col-student": "विद्यार्थी",
    "lb-col-class": "इयत्ता",
    "lb-col-xp": "XP गुण",
    "lb-col-streak": "सक्रिय स्ट्रीक",
    "analytics-subtitle": "संकल्पनांवरील प्रभुत्व, अभ्यासाची वेळ आणि कमी होणारी भीती मोजा.",
    "anal-chart-title": "दैनिक अभ्यासाचे तास (साप्ताहिक कल)",
    "anal-fear-title": "विषय भीती निर्देशांक",
    "anal-fear-desc": "डायलचे कमी मूल्य वाढलेला आत्मविश्वास आणि कमी झालेली भीती दर्शवते!",
    "fear-level-label": "किंचित चिंता"
  }
};

// --- Application State Manager ---
let state = {
  xp: 340,
  coins: 120,
  streak: 5,
  level: 2,
  language: 'en',
  unlockedMasterBadge: false,
  challengesCompleted: {
    quiz: false,
    lab: false,
    ai: false
  },
  fearScore: 40 // Starting mild anxiety fear index
};

// Load saved state from LocalStorage on load
function loadState() {
  const savedState = localStorage.getItem('stem_quest_state');
  if (savedState) {
    try {
      state = JSON.parse(savedState);
    } catch (e) {
      console.error("Error loading localStorage state:", e);
    }
  }
}

// Save state to LocalStorage
function saveState() {
  localStorage.setItem('stem_quest_state', JSON.stringify(state));
}

// --- Dynamic UI Synchronizer ---
function updateUI() {
  // Sync Status Bar Top Panels
  document.getElementById('header-xp').innerText = `${state.xp} XP`;
  document.getElementById('header-coins').innerText = state.coins;
  document.getElementById('header-streak').innerText = `${state.streak} Days`;
  document.getElementById('lang-selector').value = state.language;

  // Sync Mission Hub/Dashboard Details
  document.getElementById('dash-level-num').innerText = state.level;
  document.getElementById('dash-xp-count').innerText = state.xp;
  
  // Calculate Progress percentage based on generic 600XP per level steps
  const currentLevelMinXp = (state.level - 1) * 600;
  const nextLevelMinXp = state.level * 600;
  const relativeXpEarned = state.xp - currentLevelMinXp;
  const relativeXpNeeded = nextLevelMinXp - currentLevelMinXp;
  let progressPercentage = (relativeXpEarned / relativeXpNeeded) * 100;
  if (progressPercentage < 0) progressPercentage = 0;
  if (progressPercentage > 100) progressPercentage = 100;
  
  document.getElementById('dash-xp-fill').style.width = `${progressPercentage}%`;
  
  const xpRemaining = nextLevelMinXp - state.xp;
  const levelTitles = ["STEM Beginner", "STEM Explorer", "STEM Solver", "STEM Innovator", "STEM Master"];
  const levelTitle = levelTitles[Math.min(state.level - 1, levelTitles.length - 1)];
  document.getElementById('dash-level-title').innerText = levelTitle;

  // Sync Daily Quests completed states
  const ch1 = document.getElementById('challenge-1');
  const ch2 = document.getElementById('challenge-2');
  const ch3 = document.getElementById('challenge-3');
  
  if (state.challengesCompleted.quiz) {
    ch1.classList.add('completed');
    ch1.querySelector('.challenge-reward').innerText = "Completed! ✔";
  }
  if (state.challengesCompleted.lab) {
    ch2.classList.add('completed');
    ch2.querySelector('.challenge-reward').innerText = "Completed! ✔";
  }
  if (state.challengesCompleted.ai) {
    ch3.classList.add('completed');
    ch3.querySelector('.challenge-reward').innerText = "Completed! ✔";
  }

  // Sync badge statuses
  const masterBadge = document.getElementById('badge-master');
  if (state.unlockedMasterBadge) {
    masterBadge.classList.add('unlocked');
  }

  // Update Fear Dial Indicator inside progress page
  updateFearDial();
}

// --- Routing & Tab Switching ---
function switchTab(targetId) {
  // Hide all screens
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));

  // Show selected screen
  const targetScreen = document.getElementById(targetId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Highlight active sidebar navigation link
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('data-target') === targetId) {
      item.classList.add('active');
    }
  });

  // Special adjustments when leaving Active Quest Play view
  if (targetId !== 'quest-screen') {
    document.getElementById('nav-quest-item').style.display = 'none';
    clearInterval(questTimerInterval);
  }
}

// Set click event listeners on Sidebar menu items
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = item.getAttribute('data-target');
    switchTab(target);
  });
});

// Selector class track helper
function selectClassTrack(trackName) {
  state.level = trackName === 'Class 6-8' ? 1 : trackName === 'Class 9-10' ? 2 : 3;
  document.getElementById('user-quick-level').innerText = `${trackName} • Level ${state.level}`;
  saveState();
  updateUI();
  switchTab('dashboard-screen');
}

// --- Language Translation Engine ---
function translatePage(lang) {
  state.language = lang;
  saveState();

  const langDict = translations[lang] || translations['en'];
  
  // Translate normal texts in DOM matching key IDs
  for (const [id, value] of Object.entries(langDict)) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = value;
    }
  }

  // Translate input placeholders
  const chatInput = document.getElementById('chat-user-input');
  if (chatInput) {
    if (lang === 'hi') {
      chatInput.placeholder = "अपना प्रश्न यहाँ लिखें (उदा. गुरुत्वाकर्षण क्या है?)...";
    } else if (lang === 'mr') {
      chatInput.placeholder = "तुमचा प्रश्न येथे टाईप करा (उदा. गुरुत्वाकर्षण म्हणजे काय?)...";
    } else {
      chatInput.placeholder = "Type your question here (e.g. What is gravity?)...";
    }
  }

  // Translate active quest if playing
  if (activeQuestSubject) {
    setupActiveQuestQuestion();
  }
}

document.getElementById('lang-selector').addEventListener('change', (e) => {
  translatePage(e.target.value);
});


// ==========================================================================
// INTERACTIVE QUEST ENGINE (THE BOSS BATTLE SIMULATOR)
// ==========================================================================
let activeQuestSubject = null;
let currentQuestionIndex = 0;
let questLives = 3;
let questTimer = 45;
let questTimerInterval = null;
let questScore = 0;

const questsDatabase = {
  physics: [
    {
      question_en: "To lift the Space Rocket into orbit against the gravity monster, what force is required? (Newton's 3rd Law)",
      question_hi: "गुरुत्वाकर्षण राक्षस के खिलाफ अंतरिक्ष रॉकेट को कक्षा में उठाने के लिए, किस बल की आवश्यकता होती है? (न्यूटन का तीसरा नियम)",
      question_mr: "गुरुत्वाकर्षण राक्षसाविरुद्ध अंतराळ रॉकेटला कक्षेत ढकलण्यासाठी कोणत्या बलाची गरज आहे? (न्यूटनचा तिसरा नियम)",
      options: [
        { text_en: "Upward thrust equal to downward gravity", text_hi: "नीचे की ओर गुरुत्वाकर्षण के बराबर ऊपर की ओर प्रणोद", text_mr: "खालील गुरुत्वाकर्षणाएवढाच वरच्या दिशेने थ्रस्ट (प्रणोद)", val: false },
        { text_en: "Upward thrust exceeding downward gravity", text_hi: "नीचे की ओर गुरुत्वाकर्षण से अधिक ऊपर की ओर प्रणोद", text_mr: "खालील गुरुत्वाकर्षणापेक्षा जास्त वरच्या दिशेने थ्रस्ट", val: true },
        { text_en: "Zero force in vacuum", text_hi: "निर्वात में शून्य बल", text_mr: "पोकळीत शून्य बल", val: false },
        { text_en: "Horizontal circular momentum only", text_hi: "केवल क्षैतिज वृत्तीय संवेग", text_mr: "केवळ आडवा वर्तुळाकार संवेग", val: false }
      ],
      hint_en: "Think! To lift up, the action force pushing down must create a reaction thrust greater than the gravity pulling it down.",
      hint_hi: "सोचें! ऊपर उठने के लिए, नीचे ढकेलने वाला क्रिया बल गुरुत्वाकर्षण से अधिक प्रतिक्रिया प्रणोद पैदा करना चाहिए।",
      hint_mr: "विचार करा! वर जाण्यासाठी, खाली ढकलणारे बल हे गुरुत्वाकर्षण बलापेक्षा जास्त वर ढकलणारी प्रतिक्रिया निर्माण करणारे हवे."
    },
    {
      question_en: "If the rocket travels in deep space with engines off, what happens to its speed? (Newton's 1st Law)",
      question_hi: "यदि रॉकेट इंजन बंद होने पर गहरे अंतरिक्ष में यात्रा करता है, तो इसकी गति का क्या होता है? (न्यूटन का पहला नियम)",
      question_mr: "जर रॉकेट इंजिन बंद करून अंतराळात प्रवास करत असेल, तर त्याच्या गतीचे काय होईल? (न्यूटनचा पहिला नियम)",
      options: [
        { text_en: "It slows down gradually and stops", text_hi: "यह धीरे-धीरे धीमा होकर रुक जाता है", text_mr: "ते हळूहळू थांबेल", val: false },
        { text_en: "It continues moving at the exact same speed forever", text_hi: "यह हमेशा के लिए बिल्कुल उसी गति से चलता रहता है", text_mr: "ते अनंत काळासाठी त्याच गतीने पुढे जात राहील", val: true },
        { text_en: "It accelerates exponentially", text_hi: "यह तेजी से गति बढ़ाता है", text_mr: "त्याचा वेग वेगाने वाढेल", val: false },
        { text_en: "It turns back to Earth automatically", text_hi: "यह स्वचालित रूप से पृथ्वी पर वापस आ जाता है", text_mr: "ते आपोआप पृथ्वीकडे परतेल", val: false }
      ],
      hint_en: "No air resistance or gravity exists in deep space. An object in motion stays in motion!",
      hint_hi: "गहरे अंतरिक्ष में कोई वायु प्रतिरोध या गुरुत्वाकर्षण नहीं होता है। गतिमान वस्तु गति में ही रहती है!",
      hint_mr: "अंतराळात हवेचा रोध किंवा गुरुत्वाकर्षण नसते. गतीमधील वस्तू गतीमध्येच राहते!"
    }
  ],
  math: [
    {
      question_en: "Find the variable x: If 3x - 15 = 45, what is the value of x to balance the scale?",
      question_hi: "चर x खोजें: यदि 3x - 15 = 45 है, तो संतुलन बनाने के लिए x का मान क्या है?",
      question_mr: "चल x शोधा: जर 3x - 15 = 45 असेल, तर समीकरणाचे संतुलन साधण्यासाठी x ची किंमत किती?",
      options: [
        { text_en: "x = 10", text_hi: "x = 10", text_mr: "x = 10", val: false },
        { text_en: "x = 20", text_hi: "x = 20", text_mr: "x = 20", val: true },
        { text_en: "x = 30", text_hi: "x = 30", text_mr: "x = 30", val: false },
        { text_en: "x = 15", text_hi: "x = 15", text_mr: "x = 15", val: false }
      ],
      hint_en: "Add 15 to both sides first: 3x = 60. Now divide by 3.",
      hint_hi: "पहले दोनों तरफ 15 जोड़ें: 3x = 60. अब 3 से भाग दें।",
      hint_mr: "आधी दोन्ही बाजूंना १५ मिळवा: 3x = 60. नंतर ३ ने भागा."
    }
  ],
  chemistry: [
    {
      question_en: "To create a stable water molecule (H2O), how many Hydrogen and Oxygen atoms must combine?",
      question_hi: "एक स्थिर पानी का अणु (H2O) बनाने के लिए, कितने हाइड्रोजन और ऑक्सीजन परमाणु मिलने चाहिए?",
      question_mr: "पाण्याचा एक स्थिर रेणू (H2O) तयार करण्यासाठी किती हायड्रोजन आणि ऑक्सिजन अणू एकत्र यावे लागतील?",
      options: [
        { text_en: "1 Hydrogen + 2 Oxygen", text_hi: "1 हाइड्रोजन + 2 ऑक्सीजन", text_mr: "१ हायड्रोजन + २ ऑक्सिजन", val: false },
        { text_en: "2 Hydrogen + 1 Oxygen", text_hi: "2 हाइड्रोजन + 1 ऑक्सीजन", text_mr: "२ हायड्रोजन + १ ऑक्सिजन", val: true },
        { text_en: "2 Hydrogen + 2 Oxygen", text_hi: "2 हाइड्रोजन + 2 ऑक्सीजन", text_mr: "२ हायड्रोजन + २ ऑक्सिजन", val: false },
        { text_en: "1 Hydrogen + 1 Oxygen", text_hi: "1 हाइड्रोजन + 1 ऑक्सीजन", text_mr: "१ हायड्रोजन + १ ऑक्सिजन", val: false }
      ],
      hint_en: "H2O stands for Hydrogen x2, Oxygen x1.",
      hint_hi: "H2O का अर्थ है हाइड्रोजन x2, ऑक्सीजन x1।",
      hint_mr: "H2O चा अर्थ हायड्रोजनचे २ आणि ऑक्सिजनचा १ अणू असा आहे."
    }
  ],
  biology: [
    {
      question_en: "Which organelle is found in Plant Cells but NOT in Animal Cells, helping plants stand strong?",
      question_hi: "कौन सा अंगक पादप कोशिकाओं में पाया जाता है लेकिन जंतु कोशिकाओं में नहीं, जो पौधों को मजबूती से खड़े होने में मदद करता है?",
      question_mr: "कोणते अंगक वनस्पती पेशींमध्ये आढळते पण प्राणी पेशींमध्ये आढळत नाही, जे वनस्पतींना ताठ उभे राहण्यास मदत करते?",
      options: [
        { text_en: "Cell Wall and Chloroplast", text_hi: "कोशिका भित्ति और क्लोरोप्लास्ट (हरितलवक)", text_mr: "पेशीभित्तिका आणि हरितलवक", val: true },
        { text_en: "Mitochondria", text_hi: "सूत्रकणिका (माइटोकॉन्ड्रिया)", text_mr: "तंतुकणिका", val: false },
        { text_en: "Nucleus", text_hi: "केंद्रक (न्यूक्लियस)", text_mr: "केंद्रक", val: false },
        { text_en: "Cytoplasm", text_hi: "कोशिकाद्रव्य", text_mr: "पेशीद्रव्य", val: false }
      ],
      hint_en: "Plants need a rigid outer layer because they do not have bones, and they make food using sunlight.",
      hint_hi: "पौधों को एक कठोर बाहरी परत की आवश्यकता होती है क्योंकि उनके पास हड्डियां नहीं होती हैं, और वे सूर्य के प्रकाश से भोजन बनाते हैं।",
      hint_mr: "वनस्पतींना हाडे नसल्यामुळे त्यांना बाहेरील कडक कवचाची (भित्तिका) गरज असते."
    }
  ]
};

function startQuest(subject) {
  activeQuestSubject = subject;
  currentQuestionIndex = 0;
  questLives = 3;
  questTimer = 45;
  questScore = 0;

  // Show Active Quest button in navigation bar
  document.getElementById('nav-quest-item').style.display = 'block';

  // Render Hearts Initial View
  renderHearts();

  // Reset Rocket Canvas Graphics
  const rocket = document.getElementById('canvas-rocket');
  rocket.style.bottom = '30px';
  rocket.style.left = '20%';
  rocket.style.transform = 'rotate(-45deg)';

  const boss = document.getElementById('canvas-boss');
  boss.innerText = subject === 'math' ? '👾' : subject === 'chemistry' ? '🧪' : subject === 'biology' ? '🦠' : '🛸';

  // Setup layout view
  switchTab('quest-screen');

  // Load first question details
  setupActiveQuestQuestion();

  // Start Timer ticking
  clearInterval(questTimerInterval);
  questTimerInterval = setInterval(() => {
    questTimer--;
    document.getElementById('quest-timer-box').innerText = `00:${questTimer < 10 ? '0' + questTimer : questTimer}`;
    
    if (questTimer <= 0) {
      handleIncorrectAnswer("Timeout!");
    }
  }, 1000);
}

function renderHearts() {
  const container = document.getElementById('quest-hearts');
  container.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    if (i < questLives) {
      container.innerHTML += '<i class="fa-solid fa-heart"></i>';
    } else {
      container.innerHTML += '<i class="fa-regular fa-heart" style="color:var(--text-muted)"></i>';
    }
  }
}

function setupActiveQuestQuestion() {
  const questList = questsDatabase[activeQuestSubject];
  if (!questList || currentQuestionIndex >= questList.length) {
    showQuestSuccess();
    return;
  }

  const qData = questList[currentQuestionIndex];
  const lang = state.language;

  // Title
  document.getElementById('active-quest-title').innerText = `${translations[lang]['active-quest-title']} (${currentQuestionIndex + 1}/${questList.length})`;

  // Question Text
  const questionText = qData[`question_${lang}`] || qData['question_en'];
  document.getElementById('quest-question-text').innerText = questionText;

  // Answers options rendering
  const answersBox = document.getElementById('quest-answers-box');
  answersBox.innerHTML = '';

  qData.options.forEach((opt, idx) => {
    const text = opt[`text_${lang}`] || opt['text_en'];
    const card = document.createElement('div');
    card.className = 'quest-answer-card';
    card.innerText = text;
    card.onclick = () => selectAnswerCard(card, opt.val);
    answersBox.appendChild(card);
  });

  // Hide Next Button initially
  document.getElementById('quest-next-btn').style.display = 'none';
}

function selectAnswerCard(cardElement, isCorrect) {
  // Prevent multiple selections
  const cards = document.querySelectorAll('.quest-answer-card');
  cards.forEach(c => c.onclick = null);

  if (isCorrect) {
    cardElement.classList.add('correct');
    questScore++;
    // Animate rocket climbing/escaping!
    const rocket = document.getElementById('canvas-rocket');
    rocket.style.bottom = `${50 + (currentQuestionIndex + 1) * 70}px`;
    rocket.style.left = `${20 + (currentQuestionIndex + 1) * 20}%`;
    
    // Show Next Button
    document.getElementById('quest-next-btn').style.display = 'block';
    clearInterval(questTimerInterval);
  } else {
    cardElement.classList.add('incorrect');
    // Highlight correct answer
    const qData = questsDatabase[activeQuestSubject][currentQuestionIndex];
    const correctIdx = qData.options.findIndex(o => o.val === true);
    setTimeout(() => {
      const allCards = document.querySelectorAll('.quest-answer-card');
      if (allCards[correctIdx]) {
        allCards[correctIdx].classList.add('correct');
      }
    }, 500);

    handleIncorrectAnswer("Wrong Answer");
  }
}

function handleIncorrectAnswer(reason) {
  questLives--;
  renderHearts();
  clearInterval(questTimerInterval);

  if (questLives <= 0) {
    alert(`Game Over! ${reason}. Try starting the quest again to defeat the concept boss!`);
    switchTab('dashboard-screen');
  } else {
    // Show next button anyway to continue learning
    document.getElementById('quest-next-btn').style.display = 'block';
  }
}

function loadNextQuestion() {
  currentQuestionIndex++;
  
  const questList = questsDatabase[activeQuestSubject];
  if (currentQuestionIndex >= questList.length) {
    showQuestSuccess();
  } else {
    questTimer = 45;
    document.getElementById('quest-timer-box').innerText = `00:45`;
    setupActiveQuestQuestion();
    
    // Restart timer
    clearInterval(questTimerInterval);
    questTimerInterval = setInterval(() => {
      questTimer--;
      document.getElementById('quest-timer-box').innerText = `00:${questTimer < 10 ? '0' + questTimer : questTimer}`;
      if (questTimer <= 0) {
        handleIncorrectAnswer("Timeout!");
      }
    }, 1000);
  }
}

function askAiTutorForHint() {
  const qData = questsDatabase[activeQuestSubject][currentQuestionIndex];
  const lang = state.language;
  const hintText = qData[`hint_${lang}`] || qData['hint_en'];
  
  // Show standard modal alert or print to console. Let's make it a nice customized alert:
  alert(`💡 AI Tutor Hint: ${hintText}`);
}

function showQuestSuccess() {
  clearInterval(questTimerInterval);
  const modal = document.getElementById('quest-success-modal');
  modal.style.display = 'flex';

  // Translate modal content
  const lang = state.language;
  document.getElementById('victory-title').innerText = translations[lang]['victory-title'];
  document.getElementById('victory-subtitle').innerText = translations[lang]['victory-subtitle'];
  document.getElementById('victory-btn-close').innerText = translations[lang]['victory-btn-close'];
}

function completeAndCloseQuest() {
  // Hide success modal
  document.getElementById('quest-success-modal').style.display = 'none';
  document.getElementById('nav-quest-item').style.display = 'none';

  // Add rewards to state
  state.xp += 100;
  state.coins += 25;
  state.challengesCompleted.quiz = true;

  // Reduce fear score on successful completion
  state.fearScore = Math.max(15, state.fearScore - 8);

  // Level Up Check (Level up every 600 XP)
  const calculatedLevel = Math.floor(state.xp / 600) + 1;
  if (calculatedLevel > state.level) {
    state.level = calculatedLevel;
    alert(`🎉 Level Up! You reached Level ${state.level} - ${calculatedLevel === 3 ? 'Innovator' : 'Master'}!`);
  }

  saveState();
  updateUI();
  switchTab('dashboard-screen');
}


// ==========================================================================
// VIRTUAL LAB SIMULATOR (OHM'S LAW ELECTRIC CIRCUIT)
// ==========================================================================
let circuitSwitchOn = false;

function toggleCircuitSwitch() {
  circuitSwitchOn = !circuitSwitchOn;
  const btn = document.getElementById('lab-switch');
  const icon = document.getElementById('switch-icon');
  const lang = state.language;

  if (circuitSwitchOn) {
    btn.classList.add('btn-green');
    icon.className = "fa-solid fa-toggle-on";
    icon.style.color = "var(--neon-green)";
    btn.querySelector('label').innerText = lang === 'hi' ? 'स्विच: चालू' : lang === 'mr' ? 'स्विच: चालू' : 'Switch: ON';
  } else {
    btn.classList.remove('btn-green');
    icon.className = "fa-solid fa-toggle-off";
    icon.style.color = "var(--neon-rose)";
    btn.querySelector('label').innerText = lang === 'hi' ? 'स्विच: बंद' : lang === 'mr' ? 'स्विच: बंद' : 'Switch: OFF';
  }

  updateCircuitValues();
}

function updateCircuitValues() {
  const voltage = parseFloat(document.getElementById('voltage-slider').value);
  const resistance = parseFloat(document.getElementById('resistance-slider').value);

  // Update label readouts
  document.getElementById('voltage-val').innerText = `${voltage.toFixed(1)} V`;
  document.getElementById('resistance-val').innerText = `${resistance} Ω`;

  // Ohm's law calculation
  const current = circuitSwitchOn ? (voltage / resistance) : 0.0;

  // Sync to math display
  document.getElementById('calc-v-disp').innerText = `${voltage.toFixed(1)} V`;
  document.getElementById('calc-r-disp').innerText = `${resistance.toFixed(1)} Ω`;
  document.getElementById('calc-i-disp').innerText = `${current.toFixed(2)} A`;

  // Animate lightbulb glow intensity based on current flow
  const bulb = document.getElementById('lab-lightbulb');
  const glow = document.getElementById('bulb-glow');

  if (circuitSwitchOn && current > 0.05) {
    bulb.classList.add('on');
    // Calculate intensity percentage (clamp max current at 2.4A representing max brightness)
    let intensity = current / 2.4;
    if (intensity > 1) intensity = 1;
    glow.style.transform = `translate(-50%, -50%) scale(${1 + intensity})`;
    glow.style.background = `radial-gradient(circle, rgba(255, 235, 59, ${0.3 + intensity * 0.7}), transparent 70%)`;
  } else {
    bulb.classList.remove('on');
    glow.style.transform = `translate(-50%, -50%) scale(1)`;
  }
}

function verifyCircuitChallenge() {
  if (!circuitSwitchOn) {
    alert("❌ Error: Connect/Turn ON the circuit switch first!");
    return;
  }

  const voltage = parseFloat(document.getElementById('voltage-slider').value);
  const resistance = parseFloat(document.getElementById('resistance-slider').value);
  const current = voltage / resistance;

  // Check if current matches desired experiment target (e.g. Target: Current between 0.5A and 1.5A to safely light up bulb without burning it!)
  if (current >= 0.5 && current <= 1.5) {
    alert(`🎉 Success! Circuit balanced perfectly with Current = ${current.toFixed(2)} Amps. Light bulb glowing safely!`);
    
    if (!state.challengesCompleted.lab) {
      state.xp += 70;
      state.coins += 20;
      state.challengesCompleted.lab = true;
      state.fearScore = Math.max(15, state.fearScore - 5);
      saveState();
      updateUI();
    }
  } else if (current > 1.5) {
    alert(`💥 Danger! Current is too high (${current.toFixed(2)} A)! The bulb burnt out. Increase resistance or decrease voltage to regulate!`);
  } else {
    alert(`📉 Bulb Dim: Current is too low (${current.toFixed(2)} A) to illuminate the bulb. Increase voltage or decrease resistance!`);
  }
}


// ==========================================================================
// AI TUTOR MOCK CONVERSATIONAL DIALOGUE
// ==========================================================================
const aiDialogueDatabase = {
  newton: {
    user: "Explain Newton's Laws simply",
    bot_en: "Newton has 3 Laws of Motion:\n1. **Inertia:** Things keep doing what they are doing. A soccer ball won't move until you kick it! ⚽\n2. **Force = Mass x Acceleration:** Kick a heavy rock and a light balloon with same force. The balloon flies fast, the rock barely moves! 🪨\n3. **Action & Reaction:** For every push, there is an equal push back. When you fire a balloon rocket, air goes out backward, balloon shoots forward! 🎈",
    bot_hi: "न्यूटन के गति के 3 नियम हैं:\n1. **जड़त्व (Inertia):** वस्तुएं जो कर रही हैं वही करती रहती हैं। जब तक आप फुटबॉल को लात नहीं मारेंगे, वह नहीं हिलेगी! ⚽\n2. **बल = द्रव्यमान x त्वरण (F=ma):** एक ही बल से एक भारी पत्थर और एक हल्के गुब्बारे को मारो। गुब्बारा तेजी से उड़ता है, पत्थर मुश्किल से हिलता है! 🪨\n3. **क्रिया और प्रतिक्रिया:** हर क्रिया की बराबर विपरीत प्रतिक्रिया होती है। जब गुब्बारे से हवा पीछे निकलती है, गुब्बारा आगे भागता है! 🎈",
    bot_mr: "न्यूटनचे गतीचे ३ नियम खालीलप्रमाणे आहेत:\n1. **जडत्व (Inertia):** कोणतीही वस्तू जोपर्यंत बाह्य बल लावत नाही तोपर्यंत आपली जागा बदलत नाही. उदा. चेंडू लाथ मारल्याशिवाय हलणार नाही! ⚽\n2. **बल = वस्तुमान x त्वरण (F=ma):** जड दगड आणि हलका फुगा यांवर सारखेच बल लावले, तर फुगा वेगाने उडेल कारण त्याचे वस्तुमान कमी आहे! 🪨\n3. **क्रिया आणि प्रतिक्रिया:** प्रत्येक क्रियेला तितकीच आणि विरुद्ध प्रतिक्रिया असते. उदा. बंदुकीची गोळी पुढे जाताना खांद्याला पाठीमागे झटका बसतो! 🎈"
  },
  algebra: {
    user: "Why is algebra useful in farming?",
    bot_en: "Farming uses algebra daily!\n- **Crop yield estimation:** $Y = P \\times A$ (Yield = Plant density x Acres).\n- **Seed costs:** If 1 bag seeds costs ₹800, total cost $C = 800 \\times B$. Algebra helps farmers calculate exactly how many seed bags (B) they can buy in budget (C)! 🌾",
    bot_hi: "खेती में बीजगणित का रोज उपयोग होता है!\n- **फसल उपज अनुमान:** $Y = P \\times A$ (उपज = पौधों का घनत्व x एकड़)।\n- **बीज की लागत:** यदि बीज की 1 बोरी की कीमत ₹800 है, तो कुल लागत $C = 800 \\times B$ होगी। बीजगणित किसानों को यह गणना करने में मदद करता है कि वे अपने बजट में कितनी बोरियां (B) खरीद सकते हैं! 🌾",
    bot_mr: "शेतीमध्ये बीजगणिताचा रोज वापर होतो!\n- **पीक उत्पादन अंदाज:** $Y = P \\times A$ (उत्पादन = झाडांची घनता x एकर).\n- **बियाणे किंमत:** १ पोते बियाणे ₹८०० ला असेल, तर एकूण खर्च $C = 800 \\times B$. गणितामुळे शेतकरी बजेटनुसार बियाणे पोती खरेदीचा हिशोब अचूक मांडू शकतात! 🌾"
  },
  photosynthesis: {
    user: "How do plants make food?",
    bot_en: "Plants make food using **Photosynthesis**! ☀️🌿\nFormula:\n$$Carbon Dioxide + Water + Sunlight \\rightarrow Glucose (Food) + Oxygen$$\nChlorophyll (green pigment) captures solar light, cell wall structures capture CO2 from air, and roots draw water.",
    bot_hi: "पौधे **प्रकाश संश्लेषण (Photosynthesis)** का उपयोग करके भोजन बनाते हैं! ☀️🌿\nसूत्र:\n$$कार्बन डाइऑक्साइड + पानी + सूर्य का प्रकाश \\rightarrow ग्लूकोज (भोजन) + ऑक्सीजन$$\nक्लोरोफिल (हरा रंग) सूर्य के प्रकाश को सोखता है और जड़ें जमीन से पानी खींचती हैं।",
    bot_mr: "वनस्पती **प्रकाशसंश्लेषण (Photosynthesis)** प्रक्रियेद्वारे स्वतःचे अन्न तयार करतात! ☀️🌿\nसूत्र:\n$$कार्बन डायऑक्साइड + पाणी + सूर्यप्रकाश \\rightarrow ग्लुकोज (अन्न) + ऑक्सिजन$$\nपानांमधील क्लोरोफिल (हरितद्रव्य) सूर्यप्रकाश शोषून घेते आणि मुळे जमिनीतून पाणी शोषून घेतात."
  },
  gravity: {
    user: "What is Gravity? Easy explanation",
    bot_en: "Gravity is an invisible pull force between objects. Anything with mass pulls other mass. The larger the object (like Earth 🌍), the stronger it pulls you down to keep you from floating into space!",
    bot_hi: "गुरुत्वाकर्षण वस्तुओं के बीच एक अदृश्य खिंचाव बल है। जिस वस्तु में द्रव्यमान होता है वह दूसरों को खींचती है। पृथ्वी 🌍 जैसी बड़ी वस्तु आपको नीचे खींच कर रखती है ताकि आप अंतरिक्ष में न तैरें!",
    bot_mr: "गुरुत्वाकर्षण ही दोन वस्तूंमधील अदृश्य आकर्षण शक्ती आहे. ज्या वस्तूला वजन (वस्तुमान) असते ती दुसऱ्या वस्तूला खेचते. पृथ्वी 🌍 खूप मोठी असल्यामुळे ती आपल्याला जमिनीकडे खेचून ठेवते, ज्यामुळे आपण हवेत तरंगत नाही!"
  },
  atom: {
    user: "What is inside an Atom?",
    bot_en: "An atom is the building block of all matter. Inside, it has:\n- **Nucleus (Center):** Made of positive Protons (+) and neutral Neutrons.\n- **Orbit (Outside):** Tiny negative Electrons (-) spinning fast like planets! ⚛️",
    bot_hi: "परमाणु सभी पदार्थों की बुनियादी इकाई है। इसके अंदर होता है:\n- **नाभिक (केंद्र):** धनात्मक प्रोटॉन (+) और न्यूट्रॉन से बना।\n- **कक्षा (बाहर):** छोटे ऋणात्मक इलेक्ट्रॉन (-) ग्रहों की तरह चक्कर लगाते हैं! ⚛️",
    bot_mr: "अणू हा विश्वातील प्रत्येक पदार्थाचा लहानात लहान कण आहे. त्याच्या आत खालील घटक असतात:\n- **केंद्रक (नाभिक):** ज्यामध्ये धन प्रभारित प्रोटॉन्स (+) आणि न्यूट्रॉन्स असतात.\n- **कक्षा (बाहेर):** ऋण प्रभारित इलेक्ट्रॉन्स (-) अतिवेगाने केंद्रकाभोवती फिरतात! ⚛️"
  }
};

function askPresetDoubt(key) {
  const data = aiDialogueDatabase[key];
  if (!data) return;

  const stream = document.getElementById('chat-messages-stream');
  const lang = state.language;

  // Render User question
  const userMsg = document.createElement('div');
  userMsg.className = "chat-bubble user";
  userMsg.innerText = data.user;
  stream.appendChild(userMsg);

  // Scroll to bottom
  stream.scrollTop = stream.scrollHeight;

  // Trigger loading state for AI
  const botLoadingMsg = document.createElement('div');
  botLoadingMsg.className = "chat-bubble bot";
  botLoadingMsg.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> STEM AI is thinking...';
  stream.appendChild(botLoadingMsg);
  stream.scrollTop = stream.scrollHeight;

  // Complete AI Tutor daily challenge state
  if (!state.challengesCompleted.ai) {
    state.xp += 30;
    state.coins += 5;
    state.challengesCompleted.ai = true;
    saveState();
    updateUI();
  }

  // Set timeout response to simulate thinking
  setTimeout(() => {
    botLoadingMsg.remove();
    
    const botMsg = document.createElement('div');
    botMsg.className = "chat-bubble bot";
    const body = data[`bot_${lang}`] || data['bot_en'];
    botMsg.innerHTML = body.replace(/\n/g, "<br>");
    
    stream.appendChild(botMsg);
    stream.scrollTop = stream.scrollHeight;
  }, 1000);
}

function sendUserMessage() {
  const input = document.getElementById('chat-user-input');
  const text = input.value.trim();
  if (!text) return;

  const stream = document.getElementById('chat-messages-stream');
  
  // Render user text bubble
  const userMsg = document.createElement('div');
  userMsg.className = "chat-bubble user";
  userMsg.innerText = text;
  stream.appendChild(userMsg);
  input.value = '';
  stream.scrollTop = stream.scrollHeight;

  // Trigger loading bot bubble
  const botLoadingMsg = document.createElement('div');
  botLoadingMsg.className = "chat-bubble bot";
  botLoadingMsg.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> AI Guru is formulating hints...';
  stream.appendChild(botLoadingMsg);
  stream.scrollTop = stream.scrollHeight;

  // Check matching keywords for simple rule response
  let answerKey = 'newton'; // fallback
  const lowered = text.toLowerCase();
  if (lowered.includes('photo') || lowered.includes('plant') || lowered.includes('अन्न') || lowered.includes('भोजन')) {
    answerKey = 'photosynthesis';
  } else if (lowered.includes('algebra') || lowered.includes('math') || lowered.includes('गणित') || lowered.includes('शेती')) {
    answerKey = 'algebra';
  } else if (lowered.includes('grav') || lowered.includes('ball') || lowered.includes('खाली') || lowered.includes('गिरे')) {
    answerKey = 'gravity';
  } else if (lowered.includes('atom') || lowered.includes('अणू') || lowered.includes('परमाणु')) {
    answerKey = 'atom';
  }

  setTimeout(() => {
    botLoadingMsg.remove();
    
    const botMsg = document.createElement('div');
    botMsg.className = "chat-bubble bot";
    
    const lang = state.language;
    const body = aiDialogueDatabase[answerKey][`bot_${lang}`] || aiDialogueDatabase[answerKey]['bot_en'];
    botMsg.innerHTML = body.replace(/\n/g, "<br>") + "<br><br>💡 *Tip: Try searching other doubts or testing circuits in the Lab tab!*";
    
    stream.appendChild(botMsg);
    stream.scrollTop = stream.scrollHeight;
  }, 1200);
}

function handleChatKeyPress(event) {
  if (event.key === 'Enter') {
    sendUserMessage();
  }
}


// ==========================================================================
// CHAMPIONSHIP LEADERBOARD SIMULATOR
// ==========================================================================
const mockLeaderboardDatabase = {
  class: [
    { name: "Amit Patel", school: "Z.P. School Shirsuphal", class: "8th", xp: 1250, streak: 12, avatar: "1" },
    { name: "Priya Patil", school: "Z.P. School Shirsuphal", class: "8th", xp: 980, streak: 8, avatar: "2" },
    { name: "Rohan Kumar", school: "Z.P. School Shirsuphal", class: "8th", xp: 340, streak: 5, avatar: "Rohan", isUser: true },
    { name: "Sneha Shinde", school: "Z.P. School Shirsuphal", class: "8th", xp: 290, streak: 3, avatar: "4" },
    { name: "Rahul Deshmukh", school: "Z.P. School Shirsuphal", class: "8th", xp: 150, streak: 1, avatar: "5" }
  ],
  village: [
    { name: "Yash Sharma", school: "G.P. School Baramati", class: "9th", xp: 2400, streak: 21, avatar: "6" },
    { name: "Amit Patel", school: "Z.P. School Shirsuphal", class: "8th", xp: 1250, streak: 12, avatar: "1" },
    { name: "Karan Jadhav", school: "V.M. School Morgaon", class: "10th", xp: 1100, streak: 14, avatar: "7" },
    { name: "Rohan Kumar", school: "Z.P. School Shirsuphal", class: "8th", xp: 340, streak: 5, avatar: "Rohan", isUser: true },
    { name: "Sneha Shinde", school: "Z.P. School Shirsuphal", class: "8th", xp: 290, streak: 3, avatar: "4" }
  ],
  district: [
    { name: "Divya Joshi", school: "Model High School Pune", class: "12th", xp: 5400, streak: 45, avatar: "8" },
    { name: "Siddharth Sen", school: "City Academy Baramati", class: "11th", xp: 4800, streak: 38, avatar: "9" },
    { name: "Yash Sharma", school: "G.P. School Baramati", class: "9th", xp: 2400, streak: 21, avatar: "6" },
    { name: "Rohan Kumar", school: "Z.P. School Shirsuphal", class: "8th", xp: 340, streak: 5, avatar: "Rohan", isUser: true }
  ]
};

function loadLeaderboard(category) {
  // Toggle active mini tab buttons
  document.getElementById('lb-tab-class').classList.remove('active');
  document.getElementById('lb-tab-village').classList.remove('active');
  document.getElementById('lb-tab-district').classList.remove('active');

  document.getElementById(`lb-tab-${category}`).classList.add('active');

  const rowsContainer = document.getElementById('leaderboard-rows-box');
  rowsContainer.innerHTML = '';

  const list = mockLeaderboardDatabase[category] || [];

  // Update user's score in mock database before sorting/rendering
  list.forEach(student => {
    if (student.isUser) {
      student.xp = state.xp;
      student.streak = state.streak;
    }
  });

  // Sort descending by XP points
  list.sort((a,b) => b.xp - a.xp);

  list.forEach((student, index) => {
    const rank = index + 1;
    let rankHtml = rank;
    if (rank === 1) rankHtml = `<span class="rank-badge gold"><i class="fa-solid fa-crown"></i></span>`;
    else if (rank === 2) rankHtml = `<span class="rank-badge silver">2</span>`;
    else if (rank === 3) rankHtml = `<span class="rank-badge bronze">3</span>`;

    const row = document.createElement('tr');
    if (student.isUser) row.className = 'user-row';

    const avatarUrl = student.isUser 
      ? `https://api.dicebear.com/7.x/bottts/svg?seed=Rohan` 
      : `https://api.dicebear.com/7.x/pixel-art/svg?seed=${student.name}`;

    row.innerHTML = `
      <td class="rank-cell">${rankHtml}</td>
      <td>
        <div class="student-cell">
          <img src="${avatarUrl}" alt="Avatar">
          <div>
            <div>${student.name} ${student.isUser ? '⭐ (You)' : ''}</div>
            <div style="font-size:11px; color:var(--text-muted); font-weight:normal;">${student.school}</div>
          </div>
        </div>
      </td>
      <td>${student.class}</td>
      <td class="xp-cell">${student.xp} XP</td>
      <td class="streak-cell"><i class="fa-solid fa-fire"></i> ${student.streak} Days</td>
    `;
    rowsContainer.appendChild(row);
  });
}


// ==========================================================================
// ANALYTICS & SUBJECT FEAR DIALS
// ==========================================================================
function updateFearDial() {
  const circle = document.getElementById('fear-dial-circle');
  if (!circle) return;

  // Full radius circumference is 2 * PI * r = 2 * 3.14159 * 70 = 440
  const circumference = 440;
  
  // Convert current fearScore to progress percentage
  // Higher fearScore = higher offset (more red dial), low fearScore = low offset (retract red dial)
  const offset = circumference - (circumference * (state.fearScore / 100));
  circle.style.strokeDashoffset = offset;

  // Change color dynamically from bright red (fear) to yellow (moderate) to green (confident!)
  if (state.fearScore > 50) {
    circle.style.stroke = "var(--neon-rose)";
    document.getElementById('fear-level-label').innerText = "Anxiety / High Fear";
  } else if (state.fearScore > 25) {
    circle.style.stroke = "var(--neon-gold)";
    document.getElementById('fear-level-label').innerText = "Mild Anxiety";
  } else {
    circle.style.stroke = "var(--neon-green)";
    document.getElementById('fear-level-label').innerText = "STEM Confident! 🚀";
  }

  document.getElementById('fear-percentage-value').innerText = `${state.fearScore}%`;

  // Update mini status bars
  document.getElementById('fear-math-bar').style.width = `${Math.max(10, state.fearScore + 5)}%`;
  document.getElementById('fear-physics-bar').style.width = `${Math.max(10, state.fearScore + 10)}%`;
  document.getElementById('fear-chemistry-bar').style.width = `${Math.max(5, state.fearScore - 5)}%`;
  document.getElementById('fear-biology-bar').style.width = `${Math.max(5, state.fearScore - 15)}%`;
}


// ==========================================================================
// MAIN INITIALIZER
// ==========================================================================
window.addEventListener('load', () => {
  loadState();
  updateUI();
  translatePage(state.language);
  loadLeaderboard('class');
  updateCircuitValues();
});
