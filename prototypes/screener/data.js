/* ═══════════════════════════════════
   SCREENER DATA, v3
   Real questions and descriptions from Opus draft (copy-drafts/).
   Co-occurrence rates tagged [inference] pending Track 2 verification.
   Copyright pass against validated instruments still required before shipping.
═══════════════════════════════════ */

const DIMENSIONS = [

  /* ─── 1. AUTISM ─────────────────────────────────────────────── */
  {
    id: 'autism',
    name: 'Autism Spectrum Traits',
    shortName: 'Autism',
    timeframe: 'adult-life',
    timeframeLabel: 'Adult life overall',
    color: 'var(--autism)',
    colorSoft: 'var(--autism-soft)',
    colorDeep: 'var(--autism-deep)',
    colorCard: 'var(--autism-card)',

    shortDesc: 'A pattern of differences in social communication, sensory experience, and need for predictability that has been present since childhood. Many adults, especially those who have learned to blend in, recognise themselves only later in life.',

    extendedDesc: `<p><strong>In adults.</strong> Autism in adults rarely looks like the childhood stereotype. It often looks like exhaustion after a day of meetings nobody else seemed to find tiring. It looks like a quiet career built around a deep, narrow expertise. It looks like rehearsing phone calls before making them, or a strong preference for the same lunch, the same route, the same desk. Many autistic adults have spent decades watching other people and copying what works, which is sometimes called masking or camouflaging.</p>
<p><strong>Common misconceptions.</strong> Autism is not always visible from the outside. It is not the same as being introverted, antisocial, or shy. It is not a deficit in intelligence or empathy. It is not exclusive to men or boys, the diagnostic frame was historically built around them, which is one reason late diagnosis is so common in women, non-binary people, and anyone who learned early to perform neurotypically.</p>
<p><strong>Day to day.</strong> A loud restaurant becomes hard work even before the food arrives. A small change to a plan takes the whole day to recover from. A new interest takes over for weeks. Conversations that other people navigate without effort require conscious decoding. After a social event, even a good one, you need significant alone time to recover.</p>
<p><strong>What it gets confused with.</strong> Social anxiety, ADHD (co-occurs in roughly one in three to one in two cases, figure pending verification), and developmental trauma can all produce autism-like patterns. CPTSD and autism can also genuinely co-occur.</p>
<p><strong>Who might want to screen.</strong> Anyone who has been told they are "too sensitive", "too blunt", or "too literal" repeatedly across their life. Anyone who functions well at work but collapses at home. Anyone whose child has been diagnosed and noticed echoes in themselves.</p>`,

    subdomains: ['social-comm', 'subtext', 'routines', 'interests', 'sensory', 'masking'],
    followUpTests: [
      'RAADS-R (Ritvo Autism Asperger Diagnostic Scale)',
      'AQ (Autism Spectrum Quotient)',
      'CAT-Q (Camouflaging Autistic Traits Questionnaire)'
    ],
    coOccurs: ['sensory', 'adhd-i', 'adhd-h'],
    requiresChildhood: true,

    questions: [
      { id: 'AUT-01', text: 'Back-and-forth conversation tires me, especially with people I do not know well.', subdomain: 'social-comm', reverse: false, triageEligible: true },
      { id: 'AUT-02', text: 'In group conversations, I miss the moment when it is my turn to speak and only notice the gap afterwards.', subdomain: 'social-comm', reverse: false, triageEligible: false },
      { id: 'AUT-03', text: 'I take what people say literally and only realise later they meant something else.', subdomain: 'subtext', reverse: false, triageEligible: false },
      { id: 'AUT-04', text: 'I pick up on sarcasm, hints, and shifts in tone easily in conversation.', subdomain: 'subtext', reverse: true, triageEligible: false },
      { id: 'AUT-05', text: 'Unexpected changes to my plans throw me off for hours, even when the change itself is small.', subdomain: 'routines', reverse: false, triageEligible: true },
      { id: 'AUT-06', text: 'I follow the same routine for food, routes, or order of tasks, and feel uncomfortable when I cannot.', subdomain: 'routines', reverse: false, triageEligible: false },
      { id: 'AUT-07', text: 'When a topic catches me, I want to know everything about it and lose track of time researching it.', subdomain: 'interests', reverse: false, triageEligible: false },
      { id: 'AUT-08', text: 'I prefer in-depth conversation about subjects I know well to small talk and chitchat.', subdomain: 'interests', reverse: false, triageEligible: false },
      { id: 'AUT-09', text: 'I notice details in environments (sounds, smells, textures, lighting) that other people seem to filter out.', subdomain: 'sensory', reverse: false, triageEligible: false },
      { id: 'AUT-10', text: 'Specific sensations (a clothing label, fluorescent flicker, a particular noise) become impossible to ignore once I notice them.', subdomain: 'sensory', reverse: false, triageEligible: false },
      { id: 'AUT-11', text: 'I rehearse conversations or social situations in advance to make sure I get them right.', subdomain: 'masking', reverse: false, triageEligible: false },
      { id: 'AUT-12', text: 'After socialising, I need significant time alone to recover, even when I enjoyed it.', subdomain: 'masking', reverse: false, triageEligible: true },
    ]
  },

  /* ─── 2. ADHD INATTENTIVE ────────────────────────────────────── */
  {
    id: 'adhd-i',
    name: 'ADHD - Inattentive',
    shortName: 'ADHD (Inattentive)',
    timeframe: 'past-6-months',
    timeframeLabel: 'Past 6 months',
    color: 'var(--adhd-i)',
    colorSoft: 'var(--adhd-i-soft)',
    colorDeep: 'var(--adhd-i-deep)',
    colorCard: 'var(--adhd-i-card)',

    shortDesc: 'Difficulty regulating attention, getting started, staying on a task, finishing it, and keeping track of time. Often missed in adults who do not have the obvious hyperactive presentation.',

    extendedDesc: `<p><strong>In adults.</strong> The inattentive pattern is the version of ADHD that often goes unnoticed for decades, especially in people who were quiet in school. It is not laziness. It is a brain that struggles to direct its own attention on demand, can hyperfocus on one thing for hours, and then cannot start something it cares about for days. Time goes missing. Tasks pile up. Self-criticism builds.</p>
<p><strong>Common misconceptions.</strong> ADHD is not a child's condition that you grow out of. The inattentive pattern is not the absence of hyperactivity, it is its own profile, with restlessness that is internal rather than visible. It is not a problem of motivation. It is not solved by trying harder, though many people with this pattern have spent their lives trying very hard.</p>
<p><strong>Day to day.</strong> You sit down to work, lose forty minutes to something else, and look up startled. You walk into a room and forget what you came for. You leave a sentence half-written. You agree to deadlines that turn out to take three times as long as you estimated. You keep your keys in plain sight because if you put them away they cease to exist.</p>
<p><strong>What it gets confused with.</strong> Depression, anxiety, sleep deprivation, thyroid problems, and perimenopause can all produce ADHD-shaped symptoms. Autism and ADHD co-occur frequently, an elevated inattentive score does not rule out autism.</p>
<p><strong>Who might want to screen.</strong> Anyone who has been told they would do well "if only they applied themselves". Anyone whose work depends on systems and lists and reminders just to keep up. Anyone whose performance dropped sharply in a less-structured environment.</p>`,

    subdomains: ['sustained-attention', 'working-memory', 'task-initiation', 'follow-through', 'time-perception', 'organisation'],
    followUpTests: [
      'ASRS v1.1 (WHO Adult ADHD Self-Report Scale, free)',
      'Wender Utah Rating Scale (childhood retrospective)'
    ],
    coOccurs: ['autism', 'adhd-h'],
    requiresChildhood: true,

    questions: [
      { id: 'AHI-01', text: 'I lose focus partway through a task and find myself doing something else without remembering switching.', subdomain: 'sustained-attention', reverse: false, triageEligible: true },
      { id: 'AHI-02', text: 'I can read a long article or chapter in one sitting without losing the thread.', subdomain: 'sustained-attention', reverse: true, triageEligible: false },
      { id: 'AHI-03', text: 'I forget what someone said partway through their sentence and have to ask them to repeat it.', subdomain: 'working-memory', reverse: false, triageEligible: false },
      { id: 'AHI-04', text: 'I walk into a room and forget what I went in for.', subdomain: 'working-memory', reverse: false, triageEligible: false },
      { id: 'AHI-05', text: 'I put off starting tasks I know how to do, even ones that matter to me.', subdomain: 'task-initiation', reverse: false, triageEligible: true },
      { id: 'AHI-06', text: 'I need pressure (a deadline, someone waiting, the last possible minute) before I can begin.', subdomain: 'task-initiation', reverse: false, triageEligible: false },
      { id: 'AHI-07', text: 'I leave projects half-finished and move on to something new before the previous thing is done.', subdomain: 'follow-through', reverse: false, triageEligible: false },
      { id: 'AHI-08', text: 'I miss steps in instructions and have to redo work because I skipped ahead.', subdomain: 'follow-through', reverse: false, triageEligible: false },
      { id: 'AHI-09', text: 'I underestimate how long tasks will take, even ones I have done many times before.', subdomain: 'time-perception', reverse: false, triageEligible: true },
      { id: 'AHI-10', text: 'Time disappears on me, I look up and hours have gone by that I cannot account for.', subdomain: 'time-perception', reverse: false, triageEligible: false },
      { id: 'AHI-11', text: 'My belongings (keys, wallet, phone, papers) end up in places I cannot retrace.', subdomain: 'organisation', reverse: false, triageEligible: false },
      { id: 'AHI-12', text: 'I keep important things in plain sight, because if I put them away I forget they exist.', subdomain: 'organisation', reverse: false, triageEligible: false },
    ]
  },

  /* ─── 3. ADHD HYPERACTIVE ────────────────────────────────────── */
  {
    id: 'adhd-h',
    name: 'ADHD - Hyperactive / Impulsive',
    shortName: 'ADHD (Hyperactive)',
    timeframe: 'past-6-months',
    timeframeLabel: 'Past 6 months',
    color: 'var(--adhd-h)',
    colorSoft: 'var(--adhd-h-soft)',
    colorDeep: 'var(--adhd-h-deep)',
    colorCard: 'var(--adhd-h-card)',

    shortDesc: 'A pattern of physical or internal restlessness, difficulty waiting, talking or acting before thinking, and reactions that feel bigger than the situation. Often visible from outside, but not always recognised as ADHD.',

    extendedDesc: `<p><strong>In adults.</strong> Adult hyperactivity rarely looks like a child running around the room. It looks like a leg that will not stop bouncing in a meeting. It looks like changing jobs every two years, or starting four projects in a month. It looks like talking over people you respect because the thought arrived before you could stop it. It looks like a feeling, more than a behaviour, of always being somewhere between accelerator and brake.</p>
<p><strong>Common misconceptions.</strong> Hyperactive ADHD is not a moral failing or a confidence problem. It is widely under-diagnosed in women whose presentation skews toward racing thoughts, emotional intensity, and impulsive decisions rather than physical movement. Much of the restlessness can be internal, racing thoughts that no one else sees.</p>
<p><strong>Day to day.</strong> You interrupt people without meaning to. You buy things on impulse and regret them. Standing in a queue feels physically wrong. Your reactions to small frustrations feel disproportionate even to you. You take career swings that look brave from outside and feel inevitable from inside.</p>
<p><strong>What it gets confused with.</strong> Anxiety also produces restlessness and racing thoughts, the difference is that anxious thoughts circle a worry, ADHD thoughts ricochet. Bipolar II hypomania can look strikingly similar but comes in episodes rather than as a steady state. The inattentive and hyperactive patterns frequently co-occur.</p>
<p><strong>Who might want to screen.</strong> Anyone whose energy is the first thing people notice about them, for better and worse. Anyone whose decisions tend to outpace their planning. Anyone whose emotional reactions feel too big and arrive too fast.</p>`,

    subdomains: ['physical-restlessness', 'internal-restlessness', 'verbal-impulsivity', 'behavioural-impulsivity', 'frustration-tolerance', 'emotional-reactivity'],
    followUpTests: [
      'ASRS v1.1 (WHO Adult ADHD Self-Report Scale, free)',
      'DIVA-5 (structured interview, clinician-administered)'
    ],
    coOccurs: ['adhd-i', 'autism'],
    requiresChildhood: true,

    questions: [
      { id: 'AHH-01', text: 'I fidget with my hands, feet, or objects when I have to sit still.', subdomain: 'physical-restlessness', reverse: false, triageEligible: false },
      { id: 'AHH-02', text: 'Staying seated for long stretches (meetings, films, long meals) is physically uncomfortable for me.', subdomain: 'physical-restlessness', reverse: false, triageEligible: true },
      { id: 'AHH-03', text: 'My thoughts race faster than I can speak or write them down.', subdomain: 'internal-restlessness', reverse: false, triageEligible: false },
      { id: 'AHH-04', text: 'I feel a constant pull to move, switch activity, or do something different from what I am doing.', subdomain: 'internal-restlessness', reverse: false, triageEligible: false },
      { id: 'AHH-05', text: 'I interrupt people before they have finished speaking, even when I am trying not to.', subdomain: 'verbal-impulsivity', reverse: false, triageEligible: true },
      { id: 'AHH-06', text: 'I blurt out comments, answers, or thoughts before considering whether I should say them.', subdomain: 'verbal-impulsivity', reverse: false, triageEligible: false },
      { id: 'AHH-07', text: 'I make decisions on impulse (purchases, plans, commitments) and regret them afterwards.', subdomain: 'behavioural-impulsivity', reverse: false, triageEligible: true },
      { id: 'AHH-08', text: 'I act first and think through the consequences once it is too late to take it back.', subdomain: 'behavioural-impulsivity', reverse: false, triageEligible: false },
      { id: 'AHH-09', text: 'I lose patience in queues, traffic, or slow conversations.', subdomain: 'frustration-tolerance', reverse: false, triageEligible: false },
      { id: 'AHH-10', text: 'Waiting for something I want feels physically difficult, not just annoying.', subdomain: 'frustration-tolerance', reverse: false, triageEligible: false },
      { id: 'AHH-11', text: 'My emotional reactions feel disproportionate to what triggered them, even to me.', subdomain: 'emotional-reactivity', reverse: false, triageEligible: false },
      { id: 'AHH-12', text: 'I stay calm and even-tempered when something frustrating happens.', subdomain: 'emotional-reactivity', reverse: true, triageEligible: false },
    ]
  },

  /* ─── 4. DYSLEXIA ───────────────────────────────────────────── */
  {
    id: 'dyslexia',
    name: 'Dyslexia Traits',
    shortName: 'Dyslexia',
    timeframe: 'adult-life',
    timeframeLabel: 'Adult life overall',
    color: 'var(--dyslexia)',
    colorSoft: 'var(--dyslexia-soft)',
    colorDeep: 'var(--dyslexia-deep)',
    colorCard: 'var(--dyslexia-card)',

    shortDesc: 'A pattern of difficulty with reading, spelling, and processing written language that is independent of intelligence and lasts into adulthood. Often missed in adults who learned to read but still find it effortful.',

    extendedDesc: `<p><strong>In adults.</strong> Most adults with dyslexia learned to read. Many read well. The difference is the cost. Reading takes longer, takes more energy, and slips in low-light or low-attention moments. Spelling is unreliable for words that should be familiar. Names go missing in the moment of needing them. Many adults compensate so successfully that the dyslexia hides until something stresses the system, a new job with heavy reading, a complex form, a written exam.</p>
<p><strong>Common misconceptions.</strong> Dyslexia is not about intelligence, it is a specific processing difference, and many dyslexic adults have built careers in writing, law, or academia. It is not about "reading words backwards", that is a stereotype. It is not outgrown: the brain stays the same, what changes is the strategies you build around it.</p>
<p><strong>Day to day.</strong> You re-read paragraphs because the meaning slid past you. You misspell common words even with autocorrect. You know the word you want and cannot find it under pressure. You prefer audio or video to written instructions. You take twice as long to draft an email as people seem to expect.</p>
<p><strong>What it gets confused with.</strong> Dyslexia and ADHD both cause reading to drift, the question is whether the difficulty sits in the reading process itself or the attention around it. Dyslexia, dyspraxia, and dyscalculia frequently co-occur.</p>
<p><strong>Who might want to screen.</strong> Anyone who reads slower than they think they should. Anyone called "lazy" at school despite grasping ideas verbally. Anyone whose spelling has not improved no matter how much they read or write. Anyone in a family with diagnosed dyslexia.</p>`,

    subdomains: ['reading-effort', 'spelling', 'word-retrieval', 'sequence-memory', 'verbal-preference', 'phonological'],
    followUpTests: [
      'Adult Dyslexia Checklist (Vinegrad)',
      'York Adult Assessment (YAA)'
    ],
    coOccurs: ['dyscalculia', 'dyspraxia'],
    requiresChildhood: false,

    questions: [
      { id: 'DYX-01', text: 'Reading takes me longer than it seems to take other people for the same text.', subdomain: 'reading-effort', reverse: false, triageEligible: true },
      { id: 'DYX-02', text: 'I read text accurately and at a comfortable pace, including unfamiliar material.', subdomain: 'reading-effort', reverse: true, triageEligible: false },
      { id: 'DYX-03', text: 'I misspell common words even when I know what they should look like.', subdomain: 'spelling', reverse: false, triageEligible: true },
      { id: 'DYX-04', text: 'I rely on autocorrect or spell-check for words I have written hundreds of times.', subdomain: 'spelling', reverse: false, triageEligible: false },
      { id: 'DYX-05', text: 'I know the word I want, it is right there, but it does not come out when I am speaking.', subdomain: 'word-retrieval', reverse: false, triageEligible: false },
      { id: 'DYX-06', text: 'I swap, drop, or repeat letters and small words when writing or typing without noticing.', subdomain: 'word-retrieval', reverse: false, triageEligible: false },
      { id: 'DYX-07', text: 'Reciting the alphabet, months of the year, or times tables in order is hard for me.', subdomain: 'sequence-memory', reverse: false, triageEligible: false },
      { id: 'DYX-08', text: 'I struggle to keep written instructions in the right order while I follow them.', subdomain: 'sequence-memory', reverse: false, triageEligible: false },
      { id: 'DYX-09', text: 'I take in information better when someone explains it to me than when I read it.', subdomain: 'verbal-preference', reverse: false, triageEligible: true },
      { id: 'DYX-10', text: 'I prefer audio, video, or being shown over instructions written on a page.', subdomain: 'verbal-preference', reverse: false, triageEligible: false },
      { id: 'DYX-11', text: 'Sounding out unfamiliar words (place names, technical terms, names in another language) is hard for me.', subdomain: 'phonological', reverse: false, triageEligible: false },
      { id: 'DYX-12', text: 'I mishear words, especially over the phone or in noisy rooms, and reply to a slightly different question.', subdomain: 'phonological', reverse: false, triageEligible: false },
    ]
  },

  /* ─── 5. DYSPRAXIA ──────────────────────────────────────────── */
  {
    id: 'dyspraxia',
    name: 'Dyspraxia / DCD Traits',
    shortName: 'Dyspraxia',
    timeframe: 'adult-life',
    timeframeLabel: 'Adult life overall',
    color: 'var(--dyspraxia)',
    colorSoft: 'var(--dyspraxia-soft)',
    colorDeep: 'var(--dyspraxia-deep)',
    colorCard: 'var(--dyspraxia-card)',

    shortDesc: 'A pattern of difficulty with motor coordination, balance, and the planning of physical tasks, lasting from childhood into adult life. Goes well beyond ordinary clumsiness.',

    extendedDesc: `<p><strong>In adults.</strong> Adult dyspraxia (also called Developmental Coordination Disorder, DCD) shows up as a body that does not always do what its owner intends. It is the bruise on the hip from the table that has been in that spot for ten years. It is the handwriting that even you cannot read. It is the navigation app on for routes you walk every week. Many dyspraxic adults are creative and capable, the difficulty is specific and patchy, not global.</p>
<p><strong>Common misconceptions.</strong> Dyspraxia is not just being clumsy, it is a specific neurological pattern that can also affect organisation, sequencing, and the planning of physical tasks. It is not a sign of low intelligence. Many dyspraxic adults have built careful workarounds that hide the difficulty until they are tired, ill, or doing something new.</p>
<p><strong>Day to day.</strong> You bump into door frames, even ones you live with. Fastenings (buttons, laces, jewellery clasps) take longer than they should. New physical skills take much longer to learn than they take other people. You misjudge distances and knock things over. Multi-step physical tasks feel disorganised in your hands.</p>
<p><strong>What it gets confused with.</strong> Dyspraxia and dyslexia co-occur often. Dyspraxia and ADHD also overlap, both produce disorganised output but for different reasons. Sensory differences sit close by: dyspraxic adults often have proprioceptive and balance differences that show up in the sensory dimension too.</p>
<p><strong>Who might want to screen.</strong> Anyone described since childhood as clumsy or accident-prone. Anyone whose handwriting was always the worst in the class. Anyone who avoided team sports because their body would not do what other bodies seemed to do.</p>`,

    subdomains: ['gross-motor', 'fine-motor', 'spatial', 'learning-physical', 'balance', 'physical-organisation'],
    followUpTests: [
      'Adult DCD Checklist (ADC)',
      'Movement Assessment Battery for Adults (referral via GP)'
    ],
    coOccurs: ['dyslexia', 'sensory'],
    requiresChildhood: false,

    questions: [
      { id: 'DYP-01', text: 'I bump into furniture, door frames, or people in spaces I move through every day.', subdomain: 'gross-motor', reverse: false, triageEligible: true },
      { id: 'DYP-02', text: 'I have been described as clumsy or accident-prone by people who know me well.', subdomain: 'gross-motor', reverse: false, triageEligible: false },
      { id: 'DYP-03', text: 'Fastenings (buttons, zips, laces, jewellery clasps, packaging) give me trouble.', subdomain: 'fine-motor', reverse: false, triageEligible: false },
      { id: 'DYP-04', text: 'My handwriting is hard to read, including for me.', subdomain: 'fine-motor', reverse: false, triageEligible: true },
      { id: 'DYP-05', text: 'I get lost in places I have been to many times before.', subdomain: 'spatial', reverse: false, triageEligible: false },
      { id: 'DYP-06', text: 'I misjudge distances when parking, pouring, or reaching for things, and knock or spill them.', subdomain: 'spatial', reverse: false, triageEligible: false },
      { id: 'DYP-07', text: 'New physical skills (a sport, a dance step, a manual task) take me much longer to pick up than they take other people.', subdomain: 'learning-physical', reverse: false, triageEligible: false },
      { id: 'DYP-08', text: 'I find sequences of movements (choreography, exercise routines, assembly steps) hard to remember and reproduce.', subdomain: 'learning-physical', reverse: false, triageEligible: false },
      { id: 'DYP-09', text: 'I lose my balance easily, on uneven ground or when standing still.', subdomain: 'balance', reverse: false, triageEligible: false },
      { id: 'DYP-10', text: 'I bruise myself on things I did not realise were that close, because I misjudged where my body was.', subdomain: 'balance', reverse: false, triageEligible: false },
      { id: 'DYP-11', text: 'Physical tasks with multiple steps (cooking a meal, packing a bag, assembling something) feel disorganised in my hands.', subdomain: 'physical-organisation', reverse: false, triageEligible: true },
      { id: 'DYP-12', text: 'I move through everyday spaces and tasks with physical ease.', subdomain: 'physical-organisation', reverse: true, triageEligible: false },
    ]
  },

  /* ─── 6. DYSCALCULIA ────────────────────────────────────────── */
  {
    id: 'dyscalculia',
    name: 'Dyscalculia Traits',
    shortName: 'Dyscalculia',
    timeframe: 'adult-life',
    timeframeLabel: 'Adult life overall',
    color: 'var(--dyscalculia)',
    colorSoft: 'var(--dyscalculia-soft)',
    colorDeep: 'var(--dyscalculia-deep)',
    colorCard: 'var(--dyscalculia-card)',

    shortDesc: 'A pattern of difficulty with numbers, mental arithmetic, time, and quantity that lasts into adult life. Less well-known than dyslexia, but a similarly specific learning difference.',

    extendedDesc: `<p><strong>In adults.</strong> Adult dyscalculia is the calculator app that lives in the dock. It is the meeting where someone asks "how much is fifteen percent of forty" and your mind goes blank. It is missing trains because you misread the clock or misjudged the time. The constant low-grade anxiety around money, not because you are bad with money in principle, but because the maths slips when you need it most.</p>
<p><strong>Common misconceptions.</strong> Dyscalculia is not the same as being "bad at maths", a bored or badly taught student is not dyscalculic. It is not the same as maths anxiety, though they often coexist. It is not less real than dyslexia despite being less recognised, the prevalence is similar.</p>
<p><strong>Day to day.</strong> You reach for a calculator for sums other people work out in their head. Phone numbers and PINs do not stick. You misread analogue clocks on the fly. You cannot estimate well, how much, how far, how heavy. Numbers transpose without you noticing. You avoid situations that put you on the spot with maths.</p>
<p><strong>What it gets confused with.</strong> Dyscalculia overlaps with dyslexia (number and language processing share some routes). ADHD can produce arithmetic errors that look like dyscalculia but come from inattention. Dyspraxia can also produce difficulties with spatial-numerical reasoning.</p>
<p><strong>Who might want to screen.</strong> Anyone who avoids numbers wherever possible. Anyone who has felt stupid in maths situations all their life despite being intelligent in other areas. Anyone who suspects dyslexia and also struggles with numbers, the two often travel together.</p>`,

    subdomains: ['mental-arithmetic', 'number-memory', 'time-sense', 'quantity-estimation', 'spatial-numerical', 'math-anxiety'],
    followUpTests: [
      'Dyscalculia Screener (Butterworth, available via referral)',
      'Adult Dyscalculia Checklist'
    ],
    coOccurs: ['dyslexia'],
    requiresChildhood: false,

    questions: [
      { id: 'DYC-01', text: 'I rely on a calculator or my fingers for sums other people seem to work out in their head.', subdomain: 'mental-arithmetic', reverse: false, triageEligible: true },
      { id: 'DYC-02', text: 'Doing mental arithmetic under any time pressure makes me freeze.', subdomain: 'mental-arithmetic', reverse: false, triageEligible: false },
      { id: 'DYC-03', text: 'I cannot hold phone numbers, PINs, or addresses in my head, I have to write them down.', subdomain: 'number-memory', reverse: false, triageEligible: true },
      { id: 'DYC-04', text: 'Numbers fall out of my head as soon as I look away from them.', subdomain: 'number-memory', reverse: false, triageEligible: false },
      { id: 'DYC-05', text: 'I misread analogue clocks, or have to think for a moment to work out what time they show.', subdomain: 'time-sense', reverse: false, triageEligible: false },
      { id: 'DYC-06', text: 'I have very little internal sense of how long has passed while I have been doing something.', subdomain: 'time-sense', reverse: false, triageEligible: false },
      { id: 'DYC-07', text: 'I cannot estimate well how much something costs, weighs, or how many people are in a room.', subdomain: 'quantity-estimation', reverse: false, triageEligible: false },
      { id: 'DYC-08', text: 'Working out the right change, the tip, or whether I have enough money for what is in my basket is hard for me.', subdomain: 'quantity-estimation', reverse: false, triageEligible: false },
      { id: 'DYC-09', text: 'Estimating distance, scale, or quantity (how far, how big, how many) without measuring is difficult for me.', subdomain: 'spatial-numerical', reverse: false, triageEligible: false },
      { id: 'DYC-10', text: 'I transpose digits when writing or reading numbers (47 instead of 74, 0207 instead of 0270) without noticing.', subdomain: 'spatial-numerical', reverse: false, triageEligible: false },
      { id: 'DYC-11', text: 'I avoid situations where I will have to do maths in front of other people.', subdomain: 'math-anxiety', reverse: false, triageEligible: true },
      { id: 'DYC-12', text: 'I am comfortable working with numbers in everyday situations.', subdomain: 'math-anxiety', reverse: true, triageEligible: false },
    ]
  },

  /* ─── 7. SENSORY ────────────────────────────────────────────── */
  {
    id: 'sensory',
    name: 'Sensory Processing Differences',
    shortName: 'Sensory',
    timeframe: 'adult-life',
    timeframeLabel: 'Adult life overall',
    color: 'var(--sensory)',
    colorSoft: 'var(--sensory-soft)',
    colorDeep: 'var(--sensory-deep)',
    colorCard: 'var(--sensory-card)',

    shortDesc: 'A pattern of unusual responses to everyday sensory input, lights, sounds, textures, smells, internal signals, in either direction: more sensitive, less sensitive, or both depending on the sense.',

    extendedDesc: `<p><strong>In adults.</strong> Adults with sensory processing differences live in a world that is, by default, slightly too loud, too bright, too scratchy, or too smelly, or in a world that is paradoxically too muted in some senses and overwhelming in others. The fluorescent strip that nobody else has noticed is humming all day. The seam in the sock is ruining the meeting. Or the opposite: you do not notice you are hungry, cold, or hurt until it is significant.</p>
<p><strong>Common misconceptions.</strong> Sensory differences are not just being fussy or precious. They are real differences in how the nervous system processes input, with measurable effects on attention, energy, and emotional regulation. They are not exclusive to autism, adults with ADHD, dyspraxia, or no other neurodivergence at all can have significant sensory differences. They are not solved by exposure or "getting used to it", that often makes things worse.</p>
<p><strong>Day to day.</strong> Open-plan offices are exhausting. Specific clothing becomes intolerable and you take it off the moment you get home. Bright lights give you headaches. You either crave intense sensory input (loud music, deep pressure, fast movement) or actively avoid it. You realise you are hungry or thirsty only once it has become urgent.</p>
<p><strong>What it gets confused with.</strong> Sensory differences and autism overlap heavily, sensory profile is one of the diagnostic criteria for autism. They also overlap with anxiety, and with trauma responses including sensory hypervigilance.</p>
<p><strong>Who might want to screen.</strong> Anyone whose energy budget is dominated by sensory cost. Anyone who has been told they are "too sensitive". Anyone whose home is set up with the lights low and the music off, not because of preference but because the alternative hurts.</p>`,

    subdomains: ['auditory', 'tactile', 'visual', 'olfactory-gustatory', 'seeking-avoiding', 'interoception'],
    followUpTests: [
      'Adolescent/Adult Sensory Profile (Dunn)',
      'SPD Checklist (STAR Institute)'
    ],
    coOccurs: ['autism', 'dyspraxia'],
    requiresChildhood: false,

    questions: [
      { id: 'SEN-01', text: 'Specific sounds (chewing, ticking, repetitive noises, certain voices) feel intolerable to me, beyond just annoying.', subdomain: 'auditory', reverse: false, triageEligible: false },
      { id: 'SEN-02', text: 'In places with background noise (cafés, open offices, parties), following the conversation in front of me is hard.', subdomain: 'auditory', reverse: false, triageEligible: true },
      { id: 'SEN-03', text: 'Specific clothing textures, tags, or seams bother me to the point I cannot wear them.', subdomain: 'tactile', reverse: false, triageEligible: true },
      { id: 'SEN-04', text: 'Light or unexpected touch on my skin makes me flinch or feel uncomfortable.', subdomain: 'tactile', reverse: false, triageEligible: false },
      { id: 'SEN-05', text: 'Bright or fluorescent lights give me headaches, eye strain, or a disoriented feeling.', subdomain: 'visual', reverse: false, triageEligible: false },
      { id: 'SEN-06', text: 'Visual movement at the edge of my vision (screens, traffic, fans, patterns) is difficult to ignore.', subdomain: 'visual', reverse: false, triageEligible: false },
      { id: 'SEN-07', text: 'Strong smells (perfume, cleaning products, cooking) hit me harder than they seem to hit people around me.', subdomain: 'olfactory-gustatory', reverse: false, triageEligible: false },
      { id: 'SEN-08', text: 'Specific food textures or smells make eating uncomfortable, even with foods I like the taste of.', subdomain: 'olfactory-gustatory', reverse: false, triageEligible: false },
      { id: 'SEN-09', text: 'I crave intense sensory input (loud music, deep pressure, strong flavours, fast movement).', subdomain: 'seeking-avoiding', reverse: false, triageEligible: false },
      { id: 'SEN-10', text: 'I move, rock, or fidget to keep myself feeling regulated.', subdomain: 'seeking-avoiding', reverse: false, triageEligible: false },
      { id: 'SEN-11', text: 'I notice I am hungry, thirsty, or need the toilet only once it has become urgent.', subdomain: 'interoception', reverse: false, triageEligible: true },
      { id: 'SEN-12', text: "I notice my body's signals (hunger, thirst, tiredness, temperature, pain) clearly and in good time.", subdomain: 'interoception', reverse: true, triageEligible: false },
    ]
  },

  /* ─── 8. OCD ────────────────────────────────────────────────── */
  {
    id: 'ocd',
    name: 'OCD-like Traits',
    shortName: 'OCD',
    timeframe: 'past-6-months',
    timeframeLabel: 'Past 6 months',
    color: 'var(--ocd)',
    colorSoft: 'var(--ocd-soft)',
    colorDeep: 'var(--ocd-deep)',
    colorCard: 'var(--ocd-card)',

    shortDesc: 'A pattern of unwanted intrusive thoughts and the things you do (mentally or physically) to relieve the discomfort they cause. Goes well beyond ordinary tidiness or perfectionism.',

    extendedDesc: `<p><strong>In adults.</strong> OCD in adults often looks ordinary from outside and feels exhausting from inside. It is the lock checked four times. The phrase counted silently in your head before you can put the phone down. The replay of the conversation, looking for the moment you said the wrong thing. The intrusive thought that horrifies you, that you cannot dismiss no matter how much you do not want it.</p>
<p><strong>Common misconceptions.</strong> OCD is not the same as liking things tidy. Real OCD is distressing, time-consuming, and ego-dystonic, the thoughts and urges feel foreign and unwelcome, not preferred. It is not always visible: much of OCD is mental rituals (counting, repeating, checking in your head) that nobody else can see.</p>
<p><strong>Day to day.</strong> You check things more than once before you can move on. You leave the house and feel pulled to go back to check. You count, repeat words, or run sequences silently in your head to feel settled. The whole pattern eats time you would rather spend on other things.</p>
<p><strong>What it gets confused with.</strong> OCD and anxiety look similar but anxiety lacks the ritual structure, the loop of intrusive thought, compulsion, brief relief, repeat. OCD and autism sometimes get tangled: autistic routines are usually preferred and stabilising, OCD compulsions are unwanted and effortful. Trauma can produce intrusive thoughts and avoidant rituals that look OCD-like but trace to specific past events.</p>
<p><strong>Who might want to screen.</strong> Anyone who recognises the loop: unwanted thought, urge to neutralise it, brief relief, repeat. Anyone whose checking, counting, ordering, or cleaning takes time they do not want to give. Anyone who has read a non-cliché description of OCD and felt seen.</p>`,

    subdomains: ['intrusive-thoughts', 'checking', 'symmetry-ordering', 'mental-rituals', 'contamination', 'time-impact'],
    followUpTests: [
      'OCI-R (Obsessive-Compulsive Inventory, Revised, free)',
      'Y-BOCS (Yale-Brown, clinician-administered)'
    ],
    coOccurs: ['autism'],
    requiresChildhood: false,

    questions: [
      { id: 'OCD-01', text: 'Unwanted thoughts push into my mind and I cannot dismiss them, even when I want to.', subdomain: 'intrusive-thoughts', reverse: false, triageEligible: true },
      { id: 'OCD-02', text: 'My mind produces images, words, or ideas that disturb me and that I do not want to have.', subdomain: 'intrusive-thoughts', reverse: false, triageEligible: false },
      { id: 'OCD-03', text: 'I check things (locks, taps, switches, appliances, messages I sent) more than once before I can move on.', subdomain: 'checking', reverse: false, triageEligible: true },
      { id: 'OCD-04', text: 'After leaving the house I doubt whether I locked, unplugged, or switched off something, and feel pulled to go back.', subdomain: 'checking', reverse: false, triageEligible: false },
      { id: 'OCD-05', text: 'I rearrange objects until they feel right, even when nobody else would notice the difference.', subdomain: 'symmetry-ordering', reverse: false, triageEligible: false },
      { id: 'OCD-06', text: 'Things being out of place, asymmetric, or in the wrong order pulls at my attention until I fix them.', subdomain: 'symmetry-ordering', reverse: false, triageEligible: false },
      { id: 'OCD-07', text: 'I count, repeat words, or run sequences silently in my head to feel settled.', subdomain: 'mental-rituals', reverse: false, triageEligible: false },
      { id: 'OCD-08', text: 'I replay events in my head, looking for what I should have said or done.', subdomain: 'mental-rituals', reverse: false, triageEligible: false },
      { id: 'OCD-09', text: 'I worry about germs, contamination, or illness in ways that change what I touch or where I go.', subdomain: 'contamination', reverse: false, triageEligible: false },
      { id: 'OCD-10', text: 'I wash my hands, clean surfaces, or change clothes more than feels necessary, to feel safe.', subdomain: 'contamination', reverse: false, triageEligible: false },
      { id: 'OCD-11', text: 'My checking, counting, ordering, or cleaning takes up time I would rather spend on other things.', subdomain: 'time-impact', reverse: false, triageEligible: true },
      { id: 'OCD-12', text: 'I can leave things untidy, unchecked, or imperfect without it bothering me.', subdomain: 'time-impact', reverse: true, triageEligible: false },
    ]
  }

];

/* ── Frequency scale ── */
const SCALE = [
  { value: 0, label: 'Never' },
  { value: 1, label: 'Rarely' },
  { value: 2, label: 'Sometimes' },
  { value: 3, label: 'Often' },
  { value: 4, label: 'Very often' }
];

/* ── Scoring ── */
const SCORING = {
  itemMax: 4,
  fullItems: 12,
  triageItems: 3,
  triageFlagThreshold: 6,
  bands: {
    elevated: { min: 60, label: 'Elevated', class: 'band-elevated' },
    moderate: { min: 40, label: 'Moderate', class: 'band-moderate' },
    low:      { min: 0,  label: 'Low',      class: 'band-low'      }
  }
};

/* ── Childhood retrospective ── */
const CHILDHOOD_QUESTIONS = [
  {
    id: 'CH-01',
    text: 'As a child, I had noticeable difficulty paying attention, staying on task, or sitting still at school or at home.',
    relevantDims: ['adhd-i', 'adhd-h']
  },
  {
    id: 'CH-02',
    text: 'As a child, I found it hard to make or keep friends, or felt clearly different from other children in social situations.',
    relevantDims: ['autism']
  },
  {
    id: 'CH-03',
    text: 'As a child, I was behind in reading, writing, coordination, or learning compared to classmates.',
    relevantDims: ['adhd-i', 'adhd-h', 'autism']
  }
];

/* ── Impairment scale ── */
const IMPAIRMENT_SCALE = [
  { value: 0, label: 'Not at all' },
  { value: 1, label: 'A little' },
  { value: 2, label: 'Moderately' },
  { value: 3, label: 'Significantly' },
  { value: 4, label: 'Severely' }
];

/* ── Differentials ── */
const DIFFERENTIALS = [
  'CPTSD / developmental trauma',
  'Depression',
  'Anxiety disorders',
  'Thyroid conditions',
  'Chronic sleep deprivation',
  'Bipolar II hypomania',
  'Perimenopause / hormonal shifts'
];

/* ══════════════════════════════════
   HELPERS
══════════════════════════════════ */

function getDim(id) {
  return DIMENSIONS.find(d => d.id === id);
}

function getTriageQuestions(dimId) {
  const dim = getDim(dimId);
  return dim ? dim.questions.filter(q => q.triageEligible) : [];
}

function scoreDimension(dim, answers) {
  let raw = 0, answered = 0;
  dim.questions.forEach(q => {
    const val = answers[q.id];
    if (val === undefined || val === null) return;
    answered++;
    raw += q.reverse ? (4 - val) : val;
  });
  if (answered === 0) return null;
  return Math.round((raw / (answered * SCORING.itemMax)) * 100);
}

function scoreTriageDimension(dim, answers) {
  const qs = getTriageQuestions(dim.id);
  let raw = 0, answered = 0;
  qs.forEach(q => {
    const val = answers[q.id];
    if (val === undefined || val === null) return;
    answered++;
    raw += q.reverse ? (4 - val) : val;
  });
  if (answered === 0) return null;
  const normalised = (raw / (answered * SCORING.itemMax)) * 12;
  return { raw: normalised, flagged: normalised >= SCORING.triageFlagThreshold };
}

function getBand(pct) {
  if (pct === null) return null;
  if (pct >= SCORING.bands.elevated.min) return SCORING.bands.elevated;
  if (pct >= SCORING.bands.moderate.min) return SCORING.bands.moderate;
  return SCORING.bands.low;
}

function hasQualityWarning(dim, answers) {
  let contradictions = 0;
  dim.questions.filter(q => q.reverse).forEach(q => {
    if (answers[q.id] === undefined) return;
    dim.questions
      .filter(fq => !fq.reverse && fq.subdomain === q.subdomain && answers[fq.id] !== undefined)
      .forEach(fq => { if (answers[fq.id] >= 3 && answers[q.id] >= 3) contradictions++; });
  });
  return contradictions >= 2;
}

function getTopSubdomains(dim, answers, n = 2) {
  const scores = {};
  dim.questions.filter(q => !q.reverse).forEach(q => {
    const val = answers[q.id];
    if (val === undefined) return;
    if (!scores[q.subdomain]) scores[q.subdomain] = [];
    scores[q.subdomain].push(val);
  });
  return Object.entries(scores)
    .map(([sd, vals]) => ({ sd, avg: vals.reduce((s,v) => s+v,0) / vals.length }))
    .sort((a,b) => b.avg - a.avg)
    .slice(0, n)
    .map(x => x.sd);
}

const SUBDOMAIN_LABELS = {
  'social-comm':'social communication', 'subtext':'reading subtext and tone',
  'routines':'routines and predictability', 'interests':'focused interests',
  'sensory':'sensory intensity', 'masking':'masking and camouflaging',
  'sustained-attention':'sustaining attention', 'working-memory':'working memory',
  'task-initiation':'starting tasks', 'follow-through':'following through',
  'time-perception':'time perception', 'organisation':'organisation',
  'physical-restlessness':'physical restlessness', 'internal-restlessness':'internal restlessness',
  'verbal-impulsivity':'verbal impulsivity', 'behavioural-impulsivity':'behavioural impulsivity',
  'frustration-tolerance':'frustration tolerance', 'emotional-reactivity':'emotional reactivity',
  'reading-effort':'reading effort', 'spelling':'spelling',
  'word-retrieval':'word retrieval', 'sequence-memory':'sequence memory',
  'verbal-preference':'preference for spoken over written', 'phonological':'phonological processing',
  'gross-motor':'gross motor coordination', 'fine-motor':'fine motor control',
  'spatial':'spatial awareness', 'learning-physical':'learning new physical skills',
  'balance':'balance and proprioception', 'physical-organisation':'organising physical tasks',
  'mental-arithmetic':'mental arithmetic', 'number-memory':'number memory',
  'time-sense':'time sense', 'quantity-estimation':'quantity estimation',
  'spatial-numerical':'spatial-numerical reasoning', 'math-anxiety':'maths anxiety',
  'auditory':'auditory sensitivity', 'tactile':'tactile sensitivity',
  'visual':'visual sensitivity', 'olfactory-gustatory':'smell and taste sensitivity',
  'seeking-avoiding':'sensory seeking / avoiding', 'interoception':'interoception',
  'intrusive-thoughts':'intrusive thoughts', 'checking':'checking',
  'symmetry-ordering':'symmetry and ordering', 'mental-rituals':'mental rituals',
  'contamination':'contamination concerns', 'time-impact':'time taken by compulsions',
};
