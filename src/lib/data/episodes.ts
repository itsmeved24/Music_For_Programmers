import type { Episode } from '../types';

export const EPISODES: Episode[] = [
  {
    id: 1,
    number: 75,
    title: "TalhaVibe",
    artist: "TalhaAnjum",
    url: "https://archive.org/download/music-for-programming-ep75-datassette/Episode75-Datassette.mp3.mp3",
    duration: 5280, // 1:28:00
    description: "TalhaAnjum presents a contemporary blend of ambient textures with subtle rhythmic elements. This episode creates an ideal atmosphere for coding sessions, featuring carefully selected tracks that enhance focus and creative flow without overwhelming the listener.",
    releaseDate: new Date('2024-12-15'),
    tags: ['electronic', 'ambient', 'focus', 'programming', 'contemporary'],
    tracks: [
      { artist: "TalhaAnjum", title: "Digital Flow" },
      { artist: "TalhaAnjum", title: "Code Dreams" },
      { artist: "Ambient Collective", title: "Processing Loop" },
      { artist: "Electronic Ensemble", title: "Memory Allocation" },
      { artist: "TalhaAnjum", title: "Runtime Environment" },
      { artist: "Digital Artists", title: "Async Operations" },
      { artist: "TalhaAnjum", title: "Buffer Overflow" },
      { artist: "Programming Orchestra", title: "Stack Trace" }
    ],
    fileSize: "156 MB"
  },
  {
    id: 2,
    number: 74,
    title: "NCW",
    artist: "NCW", 
    url: "https://archive.org/download/music-for-programming-ep74-ncw/Episode74-NCW.mp3",
    duration: 5100, // 1:25:00
    description: "NCW delivers atmospheric soundscapes with minimal electronic textures. This episode creates a deep, immersive environment perfect for complex problem-solving and extended coding sessions, featuring carefully crafted ambient compositions.",
    releaseDate: new Date('2024-12-01'),
    tags: ['atmospheric', 'minimal', 'focus', 'ambient', 'electronic'],
    tracks: [
      { artist: "NCW", title: "Void Patterns" },
      { artist: "NCW", title: "Digital Substrate" },
      { artist: "Minimal Tech", title: "Clean Architecture" },
      { artist: "Ambient Code", title: "Function Calls" },
      { artist: "NCW", title: "Network Protocols" },
      { artist: "Electronic Flow", title: "Data Streams" },
      { artist: "NCW", title: "Terminal Sessions" },
      { artist: "Code Ambient", title: "Debugging Mode" }
    ],
    fileSize: "150 MB"
  },
  {
    id: 3,
    number: 73,
    title: "[in]anoce",
    artist: "[in]anoce",
    url: "https://archive.org/download/music-for-programming-ep73-inanoce/Episode73-Inanoce.mp3",
    duration: 4980, // 1:23:00
    description: "[in]anoce presents a refined exploration of minimal electronic compositions that blur the boundaries between organic and synthetic sounds. Perfect for analytical thinking and complex algorithm development sessions.",
    releaseDate: new Date('2024-11-15'),
    tags: ['minimal', 'electronic', 'programming', 'organic', 'synthetic'],
    tracks: [
      { artist: "[in]anoce", title: "Microscopic" },
      { artist: "[in]anoce", title: "Cellular Logic" },
      { artist: "Synthetic Mind", title: "Recursive Patterns" },
      { artist: "Digital Nature", title: "Binary Trees" },
      { artist: "[in]anoce", title: "Quantum States" },
      { artist: "Organic Code", title: "Neural Networks" },
      { artist: "[in]anoce", title: "Algorithm Poetry" },
      { artist: "Electronic Dreams", title: "Machine Learning" }
    ],
    fileSize: "148 MB"
  },
  {
    id: 4,
    number: 72,
    title: "Freddy Cyclone",
    artist: "Freddy Cyclone",
    url: "https://archive.org/download/music-for-programming-ep72-freddycyclone/Episode72-FreddyCyclone.mp3",
    duration: 5220, // 1:27:00
    description: "Freddy Cyclone creates swirling, dynamic ambient textures that rotate and evolve like weather systems. This episode provides energizing yet calming soundscapes perfect for intensive programming work and creative problem-solving.",
    releaseDate: new Date('2024-11-01'),
    tags: ['ambient', 'cyclonic', 'focus', 'dynamic', 'weather-inspired'],
    tracks: [
      { artist: "Freddy Cyclone", title: "Eye of the Storm" },
      { artist: "Freddy Cyclone", title: "Pressure Systems" },
      { artist: "Weather Patterns", title: "Atmospheric Variables" },
      { artist: "Storm Electronics", title: "Wind Algorithms" },
      { artist: "Freddy Cyclone", title: "Turbulence" },
      { artist: "Climate Code", title: "Temperature Control" },
      { artist: "Freddy Cyclone", title: "Barometric Functions" },
      { artist: "Cyclonic Beats", title: "Weather API" }
    ],
    fileSize: "154 MB"
  },
  {
    id: 5,
    number: 71,
    title: "Neon Genesis",
    artist: "Neon Genesis",
    url: "https://archive.org/download/music-for-programming-ep71-neongenesis/Episode71-NeonGenesis.mp3",
    duration: 5040, // 1:24:00
    description: "Neon Genesis delivers futuristic programming soundscapes with cyberpunk aesthetics. This episode creates a digital realm perfect for late-night coding sessions and creative development work with synthesized textures.",
    releaseDate: new Date('2024-10-15'),
    tags: ['futuristic', 'neon', 'programming', 'cyberpunk', 'digital'],
    tracks: [
      { artist: "Neon Genesis", title: "Neo-Tokyo 2025" },
      { artist: "Neon Genesis", title: "Digital Rain" },
      { artist: "Cyber Ambient", title: "Matrix Code" },
      { artist: "Future Tech", title: "Holographic UI" },
      { artist: "Neon Genesis", title: "Virtual Reality" },
      { artist: "Digital Punk", title: "Neural Interface" },
      { artist: "Neon Genesis", title: "Synthetic Dreams" },
      { artist: "Cybernetic Flow", title: "Binary Sunset" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 6,
    number: 70,
    title: "THINGS DISAPPEAR",
    artist: "THINGS DISAPPEAR",
    url: "https://archive.org/download/music-for-programming-ep70-thingsdisappear/Episode70-ThingsDisappear.mp3",
    duration: 4920, // 1:22:00
    description: "THINGS DISAPPEAR presents an ethereal journey through disappearing soundscapes where musical elements fade in and out of existence. Creates a meditative atmosphere for deep contemplation and focused coding sessions.",
    releaseDate: new Date('2024-10-01'),
    tags: ['ethereal', 'disappearing', 'ambient', 'meditative', 'contemplative'],
    tracks: [
      { artist: "THINGS DISAPPEAR", title: "Fading Memory" },
      { artist: "THINGS DISAPPEAR", title: "Vanishing Point" },
      { artist: "Ephemeral Code", title: "Garbage Collection" },
      { artist: "Memory Leaks", title: "Reference Counting" },
      { artist: "THINGS DISAPPEAR", title: "Digital Decay" },
      { artist: "Void Pointers", title: "Null References" },
      { artist: "THINGS DISAPPEAR", title: "Memory Deallocation" },
      { artist: "Disappearing Acts", title: "Stack Unwinding" }
    ],
    fileSize: "146 MB"
  },
  {
    id: 7,
    number: 69,
    title: "Pearl River Sound",
    artist: "Pearl River Sound",
    url: "https://archive.org/download/music-for-programming-ep69-pearlriversound/Episode69-PearlRiverSound.mp3",
    duration: 5160, // 1:26:00
    description: "Pearl River Sound presents flowing river-inspired ambient sounds with gentle electronic textures. This episode captures the continuous movement of water, creating steady rhythms perfect for programming workflows and concentration.",
    releaseDate: new Date('2024-09-15'),
    tags: ['river', 'flowing', 'ambient', 'natural', 'water-inspired'],
    tracks: [
      { artist: "Pearl River Sound", title: "Source Code" },
      { artist: "Pearl River Sound", title: "Tributary" },
      { artist: "Water Algorithms", title: "Stream Processing" },
      { artist: "Flow Control", title: "Current State" },
      { artist: "Pearl River Sound", title: "Delta Formation" },
      { artist: "River Networks", title: "Data Flow" },
      { artist: "Pearl River Sound", title: "Watershed" },
      { artist: "Aquatic Code", title: "Fluid Dynamics" }
    ],
    fileSize: "152 MB"
  },
  {
    id: 8,
    number: 68,
    title: "no data available",
    artist: "no data available",
    url: "https://archive.org/download/music-for-programming-ep68-nodataavailable/Episode68-NoDataAvailable.mp3",
    duration: 4800, // 1:20:00
    description: "no data available explores digital void and data absence, creating ambient textures from the spaces between information. This episode transforms null values into productive contemplation space for developers.",
    releaseDate: new Date('2024-09-01'),
    tags: ['void', 'data', 'minimal', 'digital', 'null-space'],
    tracks: [
      { artist: "no data available", title: "null_pointer" },
      { artist: "no data available", title: "404_not_found" },
      { artist: "Empty Arrays", title: "Undefined Behavior" },
      { artist: "Null Values", title: "Missing Data" },
      { artist: "no data available", title: "empty_set" },
      { artist: "Void Functions", title: "Return Nothing" },
      { artist: "no data available", title: "database_error" },
      { artist: "Data Absence", title: "Connection Timeout" }
    ],
    fileSize: "142 MB"
  },
  {
    id: 9,
    number: 67,
    title: "Datassette",
    artist: "Datassette",
    url: "https://archive.org/download/music-for-programming-ep67-datassette/Episode67-Datassette.mp3",
    duration: 5280, // 1:28:00
    description: "Datassette delivers classic ambient programming music featuring a diverse selection of artists. This episode combines nostalgic elements with modern ambient textures, creating a unique sonic environment perfect for coding sessions.",
    releaseDate: new Date('2024-08-15'),
    tags: ['classic', 'datassette', 'programming', 'nostalgic', 'ambient'],
    tracks: [
      { artist: "Domark 3D Construction Kit", title: "(excerpt)" },
      { artist: "Laraaji", title: "The Dance No.3" },
      { artist: "Shek O", title: "Hot Milk" },
      { artist: "Andrew Peckler", title: "Los Jardines" },
      { artist: "Multicast Dynamics", title: "Tie" },
      { artist: "Huerco S", title: "Kraamvogel" },
      { artist: "Front 149", title: "Field Recording #220729" },
      { artist: "N.N.", title: "Sleep Chamber" },
      { artist: "Agents Of The Culture Industry", title: "Reality Effect (Kafkadub)" },
      { artist: "Datassette", title: "Rain On Acanthus Leaves (live)" },
      { artist: "Lo Five", title: "Low Plaines Drifter" },
      { artist: "SEVENTH WORLD", title: "ON OUT TO THE SEVENTH WORLD" },
      { artist: "Masayoshi Fujita & Jan Jelinek", title: "Parades" },
      { artist: "Magari's Kid", title: "Vigilante (excerpt)" },
      { artist: "Maurizio Arcieri", title: "Transparenze" },
      { artist: "Bernard Parmegiani", title: "De Natura Sonorum (excerpt)" }
    ],
    fileSize: "156 MB"
  },
  {
    id: 10,
    number: 66,
    title: "Conrad Clipper",
    artist: "Conrad Clipper",
    url: "https://archive.org/download/music-for-programming-ep66-conradclipper/Episode66-ConradClipper.mp3",
    duration: 4920, // 1:22:00
    description: "Conrad Clipper delivers precision-crafted electronic soundscapes with crisp digital textures. This episode features meticulously arranged compositions that mirror the clean efficiency of well-written code and systematic problem-solving.",
    releaseDate: new Date('2024-08-01'),
    tags: ['precision', 'digital', 'crisp', 'electronic', 'efficient'],
    tracks: [
      { artist: "Conrad Clipper", title: "Binary Trees" },
      { artist: "Conrad Clipper", title: "Hash Functions" },
      { artist: "Precision Code", title: "Clean Architecture" },
      { artist: "Digital Craft", title: "Optimized Loops" },
      { artist: "Conrad Clipper", title: "Algorithm Aesthetics" },
      { artist: "Systematic Flow", title: "Code Review" },
      { artist: "Conrad Clipper", title: "Refactor Session" },
      { artist: "Efficient Logic", title: "Performance Metrics" }
    ],
    fileSize: "145 MB"
  },
  {
    id: 11,
    number: 65,
    title: "Matt Whitehead",
    artist: "Matt Whitehead",
    url: "https://archive.org/download/music-for-programming-ep65-mattwhitehead/Episode65-MattWhitehead.mp3",
    duration: 5040, // 1:24:00
    description: "Matt Whitehead presents contemplative ambient compositions with subtle melodic progressions. This episode creates a peaceful environment for deep thinking and complex problem-solving sessions, perfect for architectural planning.",
    releaseDate: new Date('2024-07-15'),
    tags: ['contemplative', 'ambient', 'melodic', 'peaceful', 'deep-thinking'],
    tracks: [
      { artist: "Matt Whitehead", title: "Recursive Thoughts" },
      { artist: "Matt Whitehead", title: "Gentle Iterations" },
      { artist: "Contemplative Code", title: "Design Patterns" },
      { artist: "Peaceful Logic", title: "System Architecture" },
      { artist: "Matt Whitehead", title: "Variable States" },
      { artist: "Deep Thinking", title: "Abstract Classes" },
      { artist: "Matt Whitehead", title: "Function Return" },
      { artist: "Melodic Algorithms", title: "Interface Design" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 12,
    number: 64,
    title: "Strepsil",
    artist: "Strepsil",
    url: "https://archive.org/download/music-for-programming-ep64-strepsil/Episode64-Strepsil.mp3",
    duration: 4860, // 1:21:00
    description: "Strepsil offers therapeutic soundscapes designed to soothe the mind during intensive coding sessions. These healing ambient textures provide mental clarity and reduce cognitive fatigue during long development cycles.",
    releaseDate: new Date('2024-07-01'),
    tags: ['therapeutic', 'healing', 'soothing', 'mental-clarity', 'cognitive'],
    tracks: [
      { artist: "Strepsil", title: "Mental Refresh" },
      { artist: "Strepsil", title: "Cognitive Rest" },
      { artist: "Therapeutic Code", title: "Bug Fix Meditation" },
      { artist: "Healing Logic", title: "Error Recovery" },
      { artist: "Strepsil", title: "Debug Mode" },
      { artist: "Mental Clarity", title: "Clean Slate" },
      { artist: "Strepsil", title: "Memory Optimization" },
      { artist: "Cognitive Flow", title: "Focus Restoration" }
    ],
    fileSize: "143 MB"
  },
  {
    id: 13,
    number: 63,
    title: "T-FLX",
    artist: "T-FLX",
    url: "https://archive.org/download/music-for-programming-ep63-tflx/Episode63-TFLX.mp3",
    duration: 5100, // 1:25:00
    description: "T-FLX delivers flexible electronic compositions that adapt and flow like responsive code architecture. This episode features dynamic arrangements that encourage creative thinking and adaptive problem-solving approaches.",
    releaseDate: new Date('2024-06-15'),
    tags: ['flexible', 'adaptive', 'dynamic', 'responsive', 'creative'],
    tracks: [
      { artist: "T-FLX", title: "Polymorphic Patterns" },
      { artist: "T-FLX", title: "Dynamic Dispatch" },
      { artist: "Flexible Code", title: "Adaptive Algorithms" },
      { artist: "Dynamic Logic", title: "Runtime Binding" },
      { artist: "T-FLX", title: "Inheritance Chain" },
      { artist: "Responsive Design", title: "Interface Adaptation" },
      { artist: "T-FLX", title: "Method Overload" },
      { artist: "Creative Flow", title: "Design Flexibility" }
    ],
    fileSize: "151 MB"
  },
  {
    id: 14,
    number: 62,
    title: "Our Grey Lives",
    artist: "Our Grey Lives",
    url: "https://archive.org/download/music-for-programming-ep62-ourgreylives/Episode62-OurGreyLives.mp3",
    duration: 4980, // 1:23:00
    description: "Our Grey Lives explores the monochromatic beauty of routine programming life, finding extraordinary depth in ordinary coding moments. This episode celebrates the subtle satisfaction of debugging and systematic problem-solving.",
    releaseDate: new Date('2024-06-01'),
    tags: ['monochromatic', 'routine', 'debugging', 'satisfaction', 'ordinary-extraordinary'],
    tracks: [
      { artist: "Our Grey Lives", title: "Monday Morning Deploy" },
      { artist: "Our Grey Lives", title: "Coffee Loop" },
      { artist: "Grey Code", title: "Daily Standups" },
      { artist: "Routine Logic", title: "Version Control" },
      { artist: "Our Grey Lives", title: "Code Review Blues" },
      { artist: "Monochrome Flow", title: "Unit Testing" },
      { artist: "Our Grey Lives", title: "Merge Conflict Resolution" },
      { artist: "Ordinary Magic", title: "Production Deploy" }
    ],
    fileSize: "147 MB"
  },
  {
    id: 15,
    number: 61,
    title: "Linnley",
    artist: "Linnley",
    url: "https://archive.org/download/music-for-programming-ep61-linnley/Episode61-Linnley.mp3",
    duration: 5220, // 1:27:00
    description: "Linnley presents linear ambient progressions with mathematical precision. This episode creates structured soundscapes that mirror algorithmic thinking and sequential problem-solving methodologies perfect for systematic development work.",
    releaseDate: new Date('2024-05-15'),
    tags: ['linear', 'mathematical', 'structured', 'algorithmic', 'sequential'],
    tracks: [
      { artist: "Linnley", title: "Linear Algebra" },
      { artist: "Linnley", title: "Sequential Processing" },
      { artist: "Mathematical Code", title: "Matrix Operations" },
      { artist: "Structured Logic", title: "Array Sorting" },
      { artist: "Linnley", title: "Graph Traversal" },
      { artist: "Algorithmic Flow", title: "Path Finding" },
      { artist: "Linnley", title: "Tree Structures" },
      { artist: "Sequential Mind", title: "Search Algorithms" }
    ],
    fileSize: "154 MB"
  },
  {
    id: 16,
    number: 60,
    title: "TUNDRA",
    artist: "TUNDRA",
    url: "https://archive.org/download/music-for-programming-ep60-tundra/Episode60-TUNDRA.mp3",
    duration: 4800, // 1:20:00
    description: "TUNDRA delivers vast, expansive soundscapes reminiscent of arctic landscapes. This episode creates an environment of infinite possibility and sparse beauty, perfect for exploring new technologies and innovative solutions.",
    releaseDate: new Date('2024-05-01'),
    tags: ['vast', 'expansive', 'arctic', 'sparse', 'innovative'],
    tracks: [
      { artist: "TUNDRA", title: "Frozen Constants" },
      { artist: "TUNDRA", title: "Ice Cold Logic" },
      { artist: "Arctic Code", title: "Permafrost Variables" },
      { artist: "Sparse Logic", title: "Minimal Overhead" },
      { artist: "TUNDRA", title: "Vast Arrays" },
      { artist: "Expansive Mind", title: "Infinite Loops" },
      { artist: "TUNDRA", title: "Crystalline Structure" },
      { artist: "Frozen Flow", title: "Zero Dependencies" }
    ],
    fileSize: "142 MB"
  },
  {
    id: 17,
    number: 59,
    title: "Munau",
    artist: "Munau",
    url: "https://archive.org/download/music-for-programming-ep59-munau/Episode59-Munau.mp3",
    duration: 5040, // 1:24:00
    description: "Munau creates mysterious and atmospheric compositions with hidden depths. This episode features enigmatic soundscapes that encourage exploration and discovery, perfect for diving deep into complex codebases and architectural challenges.",
    releaseDate: new Date('2024-04-15'),
    tags: ['mysterious', 'atmospheric', 'enigmatic', 'exploration', 'discovery'],
    tracks: [
      { artist: "Munau", title: "Hidden Methods" },
      { artist: "Munau", title: "Secret Variables" },
      { artist: "Mysterious Code", title: "Undocumented Features" },
      { artist: "Enigmatic Logic", title: "Legacy Systems" },
      { artist: "Munau", title: "Black Box Functions" },
      { artist: "Deep Exploration", title: "Code Archaeology" },
      { artist: "Munau", title: "Unknown Dependencies" },
      { artist: "Hidden Depths", title: "Reverse Engineering" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 18,
    number: 58,
    title: "O1Sun",
    artist: "O1Sun",
    url: "https://archive.org/download/music-for-programming-ep58-o1sun/Episode58-O1Sun.mp3",
    duration: 4920, // 1:22:00
    description: "O1Sun delivers solar-powered ambient compositions with warm, energizing textures. This episode creates a bright atmosphere that enhances creativity and motivation during development sessions, perfect for breakthrough moments.",
    releaseDate: new Date('2024-04-01'),
    tags: ['solar', 'warm', 'energizing', 'bright', 'creative'],
    tracks: [
      { artist: "O1Sun", title: "Solar Algorithms" },
      { artist: "O1Sun", title: "Photon Processing" },
      { artist: "Bright Code", title: "Illuminated Logic" },
      { artist: "Solar Energy", title: "Power Optimization" },
      { artist: "O1Sun", title: "Ray Tracing" },
      { artist: "Warm Algorithms", title: "Heat Maps" },
      { artist: "O1Sun", title: "Light Patterns" },
      { artist: "Energized Flow", title: "High Performance" }
    ],
    fileSize: "145 MB"
  },
  {
    id: 19,
    number: 57,
    title: "Hainbach",
    artist: "Hainbach",
    url: "https://archive.org/download/music-for-programming-ep57-hainbach/Episode57-Hainbach.mp3",
    duration: 5160, // 1:26:00
    description: "Hainbach presents experimental ambient compositions using vintage electronic equipment. This episode bridges retro computing aesthetics with modern programming needs, creating nostalgic yet forward-thinking soundscapes.",
    releaseDate: new Date('2024-03-15'),
    tags: ['experimental', 'vintage', 'retro-computing', 'nostalgic', 'forward-thinking'],
    tracks: [
      { artist: "Hainbach", title: "Vintage Processors" },
      { artist: "Hainbach", title: "Analog Synthesis" },
      { artist: "Retro Code", title: "Legacy Hardware" },
      { artist: "Vintage Logic", title: "Tube Amplifiers" },
      { artist: "Hainbach", title: "Circuit Bending" },
      { artist: "Analog Flow", title: "Magnetic Storage" },
      { artist: "Hainbach", title: "Tape Loops" },
      { artist: "Experimental Tech", title: "Modular Systems" }
    ],
    fileSize: "152 MB"
  },
  {
    id: 20,
    number: 56,
    title: "Forest Drive West",
    artist: "Forest Drive West",
    url: "https://archive.org/download/music-for-programming-ep56-forestdrivewest/Episode56-ForestDriveWest.mp3",
    duration: 4980, // 1:23:00
    description: "Forest Drive West creates organic ambient soundscapes inspired by natural environments. This episode brings the tranquility of forest paths into coding sessions, promoting calm focus and sustainable development practices.",
    releaseDate: new Date('2024-03-01'),
    tags: ['organic', 'natural', 'forest', 'tranquil', 'sustainable'],
    tracks: [
      { artist: "Forest Drive West", title: "Tree Recursion" },
      { artist: "Forest Drive West", title: "Branch Prediction" },
      { artist: "Natural Code", title: "Organic Growth" },
      { artist: "Forest Logic", title: "Root Directory" },
      { artist: "Forest Drive West", title: "Leaf Nodes" },
      { artist: "Organic Flow", title: "Natural Selection" },
      { artist: "Forest Drive West", title: "Forest Paths" },
      { artist: "Nature Algorithms", title: "Ecosystem Balance" }
    ],
    fileSize: "147 MB"
  },
  {
    id: 21,
    number: 55,
    title: "20 Jazz Funk Greats",
    artist: "20 Jazz Funk Greats",
    url: "https://archive.org/download/music-for-programming-ep55-20jazzfunkgreats/Episode55-20JazzFunkGreats.mp3",
    duration: 5100, // 1:25:00
    description: "20 Jazz Funk Greats delivers groove-oriented ambient compositions with rhythmic complexity. This episode adds subtle funk elements to programming sessions, encouraging creative coding and innovative problem-solving approaches.",
    releaseDate: new Date('2024-02-15'),
    tags: ['groove', 'rhythmic', 'funk', 'creative', 'innovative'],
    tracks: [
      { artist: "20 Jazz Funk Greats", title: "Groovy Algorithms" },
      { artist: "20 Jazz Funk Greats", title: "Funky Recursion" },
      { artist: "Jazz Code", title: "Improvised Logic" },
      { artist: "Funk Logic", title: "Rhythmic Patterns" },
      { artist: "20 Jazz Funk Greats", title: "Syncopated Loops" },
      { artist: "Groove Flow", title: "Beat Matching" },
      { artist: "20 Jazz Funk Greats", title: "Jazz Fusion" },
      { artist: "Funky Algorithms", title: "Creative Coding" }
    ],
    fileSize: "151 MB"
  },
  {
    id: 22,
    number: 54,
    title: "HLER",
    artist: "HLER",
    url: "https://archive.org/download/music-for-programming-ep54-hler/Episode54-HLER.mp3",
    duration: 4860, // 1:21:00
    description: "HLER presents high-level ambient compositions with abstract electronic textures. This episode creates sophisticated soundscapes that mirror high-level programming concepts and architectural thinking patterns.",
    releaseDate: new Date('2024-02-01'),
    tags: ['high-level', 'abstract', 'sophisticated', 'architectural', 'conceptual'],
    tracks: [
      { artist: "HLER", title: "Abstract Classes" },
      { artist: "HLER", title: "High Level Design" },
      { artist: "Abstract Code", title: "Conceptual Models" },
      { artist: "High Level Logic", title: "System Architecture" },
      { artist: "HLER", title: "Design Patterns" },
      { artist: "Sophisticated Flow", title: "Enterprise Logic" },
      { artist: "HLER", title: "Framework Design" },
      { artist: "Architectural Mind", title: "System Integration" }
    ],
    fileSize: "144 MB"
  },
  {
    id: 23,
    number: 53,
    title: "Beb Welten",
    artist: "Beb Welten",
    url: "https://archive.org/download/music-for-programming-ep53-bebwelten/Episode53-BebWelten.mp3",
    duration: 5040, // 1:24:00
    description: "Beb Welten creates worldly ambient compositions drawing from diverse cultural influences. This episode brings global perspectives to coding sessions, encouraging inclusive development practices and multicultural thinking.",
    releaseDate: new Date('2024-01-15'),
    tags: ['worldly', 'cultural', 'diverse', 'inclusive', 'multicultural'],
    tracks: [
      { artist: "Beb Welten", title: "Global Variables" },
      { artist: "Beb Welten", title: "Cultural Patterns" },
      { artist: "World Code", title: "International Standards" },
      { artist: "Cultural Logic", title: "Localization" },
      { artist: "Beb Welten", title: "Unicode Support" },
      { artist: "Global Flow", title: "Cross Platform" },
      { artist: "Beb Welten", title: "Multi Language" },
      { artist: "Diverse Algorithms", title: "Inclusive Design" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 24,
    number: 52,
    title: "Inchindown",
    artist: "Inchindown",
    url: "https://archive.org/download/music-for-programming-ep52-inchindown/Episode52-Inchindown.mp3",
    duration: 4920, // 1:22:00
    description: "Inchindown delivers deep, resonant ambient compositions with extended reverb and spatial depth. This episode creates immersive acoustic environments that enhance concentration and promote deep thinking about complex systems.",
    releaseDate: new Date('2024-01-01'),
    tags: ['deep', 'resonant', 'spatial', 'immersive', 'complex-systems'],
    tracks: [
      { artist: "Inchindown", title: "Deep Recursion" },
      { artist: "Inchindown", title: "Resonant Frequencies" },
      { artist: "Deep Code", title: "Stack Overflow" },
      { artist: "Spatial Logic", title: "3D Algorithms" },
      { artist: "Inchindown", title: "Echo Chambers" },
      { artist: "Resonant Flow", title: "Feedback Loops" },
      { artist: "Inchindown", title: "Reverb Chains" },
      { artist: "Deep Systems", title: "Complex Networks" }
    ],
    fileSize: "145 MB"
  },
  {
    id: 25,
    number: 51,
    title: "Mucha",
    artist: "Mucha",
    url: "https://archive.org/download/music-for-programming-ep51-mucha/Episode51-Mucha.mp3",
    duration: 5160, // 1:26:00
    description: "Mucha presents art nouveau-inspired ambient compositions with elegant, flowing structures. This episode creates aesthetically pleasing soundscapes that encourage beautiful code design and elegant solution architecture.",
    releaseDate: new Date('2023-12-15'),
    tags: ['art-nouveau', 'elegant', 'flowing', 'aesthetic', 'beautiful-code'],
    tracks: [
      { artist: "Mucha", title: "Elegant Structures" },
      { artist: "Mucha", title: "Beautiful Code" },
      { artist: "Art Code", title: "Design Patterns" },
      { artist: "Elegant Logic", title: "Clean Interfaces" },
      { artist: "Mucha", title: "Artistic Algorithms" },
      { artist: "Flowing Design", title: "Graceful Degradation" },
      { artist: "Mucha", title: "Aesthetic Functions" },
      { artist: "Beautiful Systems", title: "Visual Harmony" }
    ],
    fileSize: "152 MB"
  },
  {
    id: 26,
    number: 50,
    title: "Misc.",
    artist: "Misc.",
    url: "https://archive.org/download/music-for-programming-ep50-misc/Episode50-Misc.mp3",
    duration: 4980, // 1:23:00
    description: "Misc. delivers miscellaneous ambient compositions from various sources and styles. This milestone 50th episode celebrates diversity in programming music with eclectic soundscapes for versatile development sessions.",
    releaseDate: new Date('2023-12-01'),
    tags: ['miscellaneous', 'diverse', 'milestone', 'eclectic', 'versatile'],
    tracks: [
      { artist: "Misc.", title: "Mixed Types" },
      { artist: "Misc.", title: "Varied Algorithms" },
      { artist: "Various Artists", title: "Code Snippets" },
      { artist: "Eclectic Logic", title: "Random Access" },
      { artist: "Misc.", title: "Utility Functions" },
      { artist: "Diverse Flow", title: "Multi Threading" },
      { artist: "Misc.", title: "Helper Methods" },
      { artist: "Mixed Systems", title: "Hybrid Architecture" }
    ],
    fileSize: "147 MB"
  },
  {
    id: 27,
    number: 49,
    title: "Julien Mier",
    artist: "Julien Mier",
    url: "https://archive.org/download/music-for-programming-ep49-julienmier/Episode49-JulienMier.mp3",
    duration: 5100, // 1:25:00
    description: "Julien Mier creates sophisticated ambient compositions with French electronic influences. This episode brings European elegance to coding sessions with refined soundscapes perfect for architectural planning and design work.",
    releaseDate: new Date('2023-11-15'),
    tags: ['sophisticated', 'french', 'elegant', 'refined', 'architectural'],
    tracks: [
      { artist: "Julien Mier", title: "Elegant Solutions" },
      { artist: "Julien Mier", title: "French Algorithms" },
      { artist: "Sophisticated Code", title: "Design Elegance" },
      { artist: "Refined Logic", title: "Architectural Patterns" },
      { artist: "Julien Mier", title: "European Standards" },
      { artist: "Elegant Flow", title: "Clean Code" },
      { artist: "Julien Mier", title: "Sophisticated Systems" },
      { artist: "French Tech", title: "Innovation Patterns" }
    ],
    fileSize: "151 MB"
  },
  {
    id: 28,
    number: 48,
    title: "Michael Hicks",
    artist: "Michael Hicks",
    url: "https://archive.org/download/music-for-programming-ep48-michaelhicks/Episode48-MichaelHicks.mp3",
    duration: 4860, // 1:21:00
    description: "Michael Hicks delivers contemporary ambient compositions with modern production techniques. This episode features cutting-edge soundscapes that reflect current programming methodologies and agile development practices.",
    releaseDate: new Date('2023-11-01'),
    tags: ['contemporary', 'modern', 'cutting-edge', 'agile', 'methodologies'],
    tracks: [
      { artist: "Michael Hicks", title: "Modern Methods" },
      { artist: "Michael Hicks", title: "Agile Iterations" },
      { artist: "Contemporary Code", title: "Current Practices" },
      { artist: "Modern Logic", title: "Latest Frameworks" },
      { artist: "Michael Hicks", title: "Scrum Sessions" },
      { artist: "Agile Flow", title: "Sprint Planning" },
      { artist: "Michael Hicks", title: "DevOps Pipeline" },
      { artist: "Modern Systems", title: "Cloud Architecture" }
    ],
    fileSize: "144 MB"
  },
  {
    id: 29,
    number: 47,
    title: "Abe Mangger",
    artist: "Abe Mangger",
    url: "https://archive.org/download/music-for-programming-ep47-abemangger/Episode47-AbeMangger.mp3",
    duration: 5220, // 1:27:00
    description: "Abe Mangger creates experimental ambient compositions with unconventional structures. This episode encourages creative problem-solving and innovative thinking through unique soundscapes that challenge traditional programming approaches.",
    releaseDate: new Date('2023-10-15'),
    tags: ['experimental', 'unconventional', 'creative', 'innovative', 'challenging'],
    tracks: [
      { artist: "Abe Mangger", title: "Unconventional Logic" },
      { artist: "Abe Mangger", title: "Creative Solutions" },
      { artist: "Experimental Code", title: "Novel Approaches" },
      { artist: "Innovative Logic", title: "Breakthrough Thinking" },
      { artist: "Abe Mangger", title: "Outside The Box" },
      { artist: "Creative Flow", title: "Lateral Thinking" },
      { artist: "Abe Mangger", title: "Paradigm Shifts" },
      { artist: "Experimental Systems", title: "Disruptive Innovation" }
    ],
    fileSize: "154 MB"
  },
  {
    id: 30,
    number: 46,
    title: "Jo Johnson",
    artist: "Jo Johnson",
    url: "https://archive.org/download/music-for-programming-ep46-jojohnson/Episode46-JoJohnson.mp3",
    duration: 4920, // 1:22:00
    description: "Jo Johnson presents minimalist ambient compositions with subtle variations and gentle progressions. This episode creates calm, focused environments perfect for detailed coding work and careful debugging sessions.",
    releaseDate: new Date('2023-10-01'),
    tags: ['minimalist', 'subtle', 'gentle', 'calm', 'detailed'],
    tracks: [
      { artist: "Jo Johnson", title: "Minimal Functions" },
      { artist: "Jo Johnson", title: "Subtle Changes" },
      { artist: "Minimalist Code", title: "Clean Interfaces" },
      { artist: "Gentle Logic", title: "Soft Transitions" },
      { artist: "Jo Johnson", title: "Quiet Algorithms" },
      { artist: "Subtle Flow", title: "Gentle Refactoring" },
      { artist: "Jo Johnson", title: "Calm Debugging" },
      { artist: "Minimal Systems", title: "Simple Solutions" }
    ],
    fileSize: "145 MB"
  },
  {
    id: 31,
    number: 45,
    title: "Ehohroma",
    artist: "Ehohroma",
    url: "https://archive.org/download/music-for-programming-ep45-ehohroma/Episode45-Ehohroma.mp3",
    duration: 5040, // 1:24:00
    description: "Ehohroma delivers chromatic ambient compositions exploring color-based sonic textures. This episode uses spectrum-inspired soundscapes to enhance visual coding environments and design-oriented programming tasks.",
    releaseDate: new Date('2023-09-15'),
    tags: ['chromatic', 'color-based', 'spectrum', 'visual', 'design-oriented'],
    tracks: [
      { artist: "Ehohroma", title: "Color Palettes" },
      { artist: "Ehohroma", title: "RGB Functions" },
      { artist: "Chromatic Code", title: "Spectrum Analysis" },
      { artist: "Color Logic", title: "Hue Algorithms" },
      { artist: "Ehohroma", title: "Visual Variables" },
      { artist: "Spectrum Flow", title: "Color Theory" },
      { artist: "Ehohroma", title: "Design Systems" },
      { artist: "Visual Code", title: "UI Patterns" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 32,
    number: 44,
    title: "hubka",
    artist: "hubka",
    url: "https://archive.org/download/music-for-programming-ep44-hubka/Episode44-hubka.mp3",
    duration: 4980, // 1:23:00
    description: "hubka creates hub-centered ambient compositions focusing on connectivity and network patterns. This episode emphasizes distributed systems thinking and collaborative development through interconnected soundscapes.",
    releaseDate: new Date('2023-09-01'),
    tags: ['hub-centered', 'connectivity', 'network', 'distributed', 'collaborative'],
    tracks: [
      { artist: "hubka", title: "Network Hubs" },
      { artist: "hubka", title: "Connection Points" },
      { artist: "Network Code", title: "Distributed Systems" },
      { artist: "Hub Logic", title: "Central Nodes" },
      { artist: "hubka", title: "Mesh Networks" },
      { artist: "Connected Flow", title: "Peer to Peer" },
      { artist: "hubka", title: "Load Balancing" },
      { artist: "Network Systems", title: "Cluster Computing" }
    ],
    fileSize: "147 MB"
  },
  {
    id: 33,
    number: 43,
    title: "Casino Versus Japan",
    artist: "Casino Versus Japan",
    url: "https://archive.org/download/music-for-programming-ep43-casinoversusjapan/Episode43-CasinoVersusJapan.mp3",
    duration: 5160, // 1:26:00
    description: "Casino Versus Japan delivers glitchy ambient compositions with Japanese electronic influences. This episode blends Eastern minimalism with Western electronic techniques, perfect for cross-cultural development projects.",
    releaseDate: new Date('2023-08-15'),
    tags: ['glitchy', 'japanese', 'minimalism', 'cross-cultural', 'electronic'],
    tracks: [
      { artist: "Casino Versus Japan", title: "Glitch Patterns" },
      { artist: "Casino Versus Japan", title: "Eastern Logic" },
      { artist: "Japanese Code", title: "Zen Algorithms" },
      { artist: "Glitch Logic", title: "Error Handling" },
      { artist: "Casino Versus Japan", title: "Cultural Bridges" },
      { artist: "Eastern Flow", title: "Minimal Interfaces" },
      { artist: "Casino Versus Japan", title: "Tech Fusion" },
      { artist: "Cross Cultural", title: "Global Standards" }
    ],
    fileSize: "152 MB"
  },
  {
    id: 34,
    number: 42,
    title: "Ben Frost",
    artist: "Ben Frost",
    url: "https://archive.org/download/music-for-programming-ep42-benfrost/Episode42-BenFrost.mp3",
    duration: 4800, // 1:20:00
    description: "Ben Frost creates intense ambient compositions with crystalline textures and precise sound design. This episode provides sharp focus for complex algorithmic work and system optimization tasks.",
    releaseDate: new Date('2023-08-01'),
    tags: ['intense', 'crystalline', 'precise', 'sharp-focus', 'optimization'],
    tracks: [
      { artist: "Ben Frost", title: "Crystal Clear" },
      { artist: "Ben Frost", title: "Frozen Logic" },
      { artist: "Crystalline Code", title: "Pure Functions" },
      { artist: "Precise Logic", title: "Exact Algorithms" },
      { artist: "Ben Frost", title: "Sharp Focus" },
      { artist: "Intense Flow", title: "High Performance" },
      { artist: "Ben Frost", title: "Optimization Loops" },
      { artist: "Crystal Systems", title: "Perfect Precision" }
    ],
    fileSize: "142 MB"
  },
  {
    id: 35,
    number: 41,
    title: "Slowdive",
    artist: "Slowdive",
    url: "https://archive.org/download/music-for-programming-ep41-slowdive/Episode41-Slowdive.mp3",
    duration: 5100, // 1:25:00
    description: "Slowdive delivers dreamy ambient compositions with shoegaze influences and ethereal textures. This episode creates immersive environments perfect for contemplative coding and creative development sessions.",
    releaseDate: new Date('2023-07-15'),
    tags: ['dreamy', 'shoegaze', 'ethereal', 'immersive', 'contemplative'],
    tracks: [
      { artist: "Slowdive", title: "Dreamy Algorithms" },
      { artist: "Slowdive", title: "Ethereal Functions" },
      { artist: "Dreamy Code", title: "Floating Variables" },
      { artist: "Ethereal Logic", title: "Cloud Computing" },
      { artist: "Slowdive", title: "Immersive Design" },
      { artist: "Contemplative Flow", title: "Meditative Coding" },
      { artist: "Slowdive", title: "Atmospheric Patterns" },
      { artist: "Dreamy Systems", title: "Sublime Architecture" }
    ],
    fileSize: "151 MB"
  },
  {
    id: 36,
    number: 40,
    title: "Popup",
    artist: "Popup",
    url: "https://archive.org/download/music-for-programming-ep40-popup/Episode40-Popup.mp3",
    duration: 4860, // 1:21:00
    description: "Popup creates sudden ambient compositions with unexpected elements and dynamic changes. This episode encourages adaptive thinking and quick problem-solving through surprise musical elements and creative transitions.",
    releaseDate: new Date('2023-07-01'),
    tags: ['sudden', 'unexpected', 'dynamic', 'adaptive', 'quick-thinking'],
    tracks: [
      { artist: "Popup", title: "Alert Messages" },
      { artist: "Popup", title: "Dynamic Loading" },
      { artist: "Sudden Code", title: "Exception Handling" },
      { artist: "Dynamic Logic", title: "Event Driven" },
      { artist: "Popup", title: "Modal Windows" },
      { artist: "Adaptive Flow", title: "Responsive Design" },
      { artist: "Popup", title: "Quick Actions" },
      { artist: "Dynamic Systems", title: "Real Time Updates" }
    ],
    fileSize: "144 MB"
  },
  {
    id: 37,
    number: 39,
    title: "Stumbleine",
    artist: "Stumbleine",
    url: "https://archive.org/download/music-for-programming-ep39-stumbleine/Episode39-Stumbleine.mp3",
    duration: 5220, // 1:27:00
    description: "Stumbleine delivers intricate ambient compositions with complex layering and subtle progressions. This episode supports detailed work and careful analysis through sophisticated soundscapes perfect for architectural planning.",
    releaseDate: new Date('2023-06-15'),
    tags: ['intricate', 'complex', 'layered', 'sophisticated', 'architectural'],
    tracks: [
      { artist: "Stumbleine", title: "Complex Layers" },
      { artist: "Stumbleine", title: "Intricate Patterns" },
      { artist: "Layered Code", title: "Multi Tier Architecture" },
      { artist: "Complex Logic", title: "Nested Structures" },
      { artist: "Stumbleine", title: "Detailed Analysis" },
      { artist: "Sophisticated Flow", title: "Enterprise Patterns" },
      { artist: "Stumbleine", title: "Architectural Planning" },
      { artist: "Complex Systems", title: "System Integration" }
    ],
    fileSize: "154 MB"
  },
  {
    id: 38,
    number: 38,
    title: "Four Tet",
    artist: "Four Tet",
    url: "https://archive.org/download/music-for-programming-ep38-fourtet/Episode38-FourTet.mp3",
    duration: 4920, // 1:22:00
    description: "Four Tet creates rhythmic ambient compositions with organic electronic textures. This episode balances structure with fluidity, perfect for agile development practices and iterative programming approaches.",
    releaseDate: new Date('2023-06-01'),
    tags: ['rhythmic', 'organic', 'balanced', 'agile', 'iterative'],
    tracks: [
      { artist: "Four Tet", title: "Organic Loops" },
      { artist: "Four Tet", title: "Rhythmic Patterns" },
      { artist: "Organic Code", title: "Natural Growth" },
      { artist: "Rhythmic Logic", title: "Iterative Cycles" },
      { artist: "Four Tet", title: "Balanced Systems" },
      { artist: "Fluid Flow", title: "Agile Sprints" },
      { artist: "Four Tet", title: "Harmonic Functions" },
      { artist: "Organic Systems", title: "Evolutionary Code" }
    ],
    fileSize: "145 MB"
  },
  {
    id: 39,
    number: 37,
    title: "Biosphere",
    artist: "Biosphere",
    url: "https://archive.org/download/music-for-programming-ep37-biosphere/Episode37-Biosphere.mp3",
    duration: 5040, // 1:24:00
    description: "Biosphere delivers environmental ambient compositions inspired by natural ecosystems. This episode creates sustainable coding environments that promote long-term thinking and ecological programming practices.",
    releaseDate: new Date('2023-05-15'),
    tags: ['environmental', 'ecosystems', 'sustainable', 'ecological', 'long-term'],
    tracks: [
      { artist: "Biosphere", title: "Ecosystem Balance" },
      { artist: "Biosphere", title: "Natural Selection" },
      { artist: "Environmental Code", title: "Sustainable Design" },
      { artist: "Ecosystem Logic", title: "Circular References" },
      { artist: "Biosphere", title: "Green Computing" },
      { artist: "Sustainable Flow", title: "Renewable Resources" },
      { artist: "Biosphere", title: "Carbon Footprint" },
      { artist: "Eco Systems", title: "Environment Variables" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 40,
    number: 36,
    title: "Emancipator",
    artist: "Emancipator",
    url: "https://archive.org/download/music-for-programming-ep36-emancipator/Episode36-Emancipator.mp3",
    duration: 4980, // 1:23:00
    description: "Emancipator creates liberating ambient compositions that free the mind from constraints. This episode encourages creative freedom and innovative thinking through expansive soundscapes perfect for breakthrough development work.",
    releaseDate: new Date('2023-05-01'),
    tags: ['liberating', 'freedom', 'innovative', 'expansive', 'breakthrough'],
    tracks: [
      { artist: "Emancipator", title: "Freedom Functions" },
      { artist: "Emancipator", title: "Liberation Logic" },
      { artist: "Free Code", title: "Open Source" },
      { artist: "Liberation Logic", title: "Unrestricted Access" },
      { artist: "Emancipator", title: "Creative Freedom" },
      { artist: "Expansive Flow", title: "Unlimited Scope" },
      { artist: "Emancipator", title: "Breaking Boundaries" },
      { artist: "Free Systems", title: "Open Standards" }
    ],
    fileSize: "147 MB"
  },
  {
    id: 41,
    number: 35,
    title: "Kerretta",
    artist: "Kerretta",
    url: "https://archive.org/download/music-for-programming-ep35-kerretta/Episode35-Kerretta.mp3",
    duration: 5160, // 1:26:00
    description: "Kerretta delivers post-rock influenced ambient compositions with dynamic buildups and emotional depth. This episode supports passionate coding sessions and emotionally engaging development work through powerful soundscapes.",
    releaseDate: new Date('2023-04-15'),
    tags: ['post-rock', 'dynamic', 'emotional', 'passionate', 'powerful'],
    tracks: [
      { artist: "Kerretta", title: "Dynamic Builds" },
      { artist: "Kerretta", title: "Emotional Depth" },
      { artist: "Post Rock Code", title: "Progressive Development" },
      { artist: "Dynamic Logic", title: "Crescendo Patterns" },
      { artist: "Kerretta", title: "Passionate Algorithms" },
      { artist: "Emotional Flow", title: "Expressive Code" },
      { artist: "Kerretta", title: "Power Chords" },
      { artist: "Dynamic Systems", title: "Scalable Architecture" }
    ],
    fileSize: "152 MB"
  },
  {
    id: 42,
    number: 34,
    title: "Com Truise",
    artist: "Com Truise",
    url: "https://archive.org/download/music-for-programming-ep34-comtruise/Episode34-ComTruise.mp3",
    duration: 4800, // 1:20:00
    description: "Com Truise creates retro-futuristic ambient compositions with synthwave influences. This episode brings nostalgic computing aesthetics to modern development work, perfect for retro-inspired projects and vintage system emulation.",
    releaseDate: new Date('2023-04-01'),
    tags: ['retro-futuristic', 'synthwave', 'nostalgic', 'vintage', 'emulation'],
    tracks: [
      { artist: "Com Truise", title: "Retro Computing" },
      { artist: "Com Truise", title: "Synthwave Logic" },
      { artist: "Retro Code", title: "Vintage Systems" },
      { artist: "Futuristic Logic", title: "Time Machine" },
      { artist: "Com Truise", title: "Neon Algorithms" },
      { artist: "Nostalgic Flow", title: "Classic Patterns" },
      { artist: "Com Truise", title: "80s Interfaces" },
      { artist: "Retro Systems", title: "Legacy Support" }
    ],
    fileSize: "142 MB"
  },
  {
    id: 43,
    number: 33,
    title: "65daysofstatic",
    artist: "65daysofstatic",
    url: "https://archive.org/download/music-for-programming-ep33-65daysofstatic/Episode33-65daysofstatic.mp3",
    duration: 5100, // 1:25:00
    description: "65daysofstatic delivers cinematic ambient compositions with mathematical precision and electronic complexity. This episode creates epic soundscapes perfect for large-scale system development and ambitious programming projects.",
    releaseDate: new Date('2023-03-15'),
    tags: ['cinematic', 'mathematical', 'epic', 'large-scale', 'ambitious'],
    tracks: [
      { artist: "65daysofstatic", title: "Epic Algorithms" },
      { artist: "65daysofstatic", title: "Mathematical Beauty" },
      { artist: "Cinematic Code", title: "Grand Architecture" },
      { artist: "Epic Logic", title: "Massive Scale" },
      { artist: "65daysofstatic", title: "Ambitious Projects" },
      { artist: "Mathematical Flow", title: "Complex Calculations" },
      { artist: "65daysofstatic", title: "System Symphony" },
      { artist: "Epic Systems", title: "Monumental Code" }
    ],
    fileSize: "151 MB"
  },
  {
    id: 44,
    number: 32,
    title: "No Clear Mind",
    artist: "No Clear Mind",
    url: "https://archive.org/download/music-for-programming-ep32-noclearmind/Episode32-NoClearMind.mp3",
    duration: 4860, // 1:21:00
    description: "No Clear Mind creates foggy ambient compositions that embrace uncertainty and ambiguity. This episode helps navigate unclear requirements and ambiguous specifications through meditative soundscapes that clarify thinking.",
    releaseDate: new Date('2023-03-01'),
    tags: ['foggy', 'uncertain', 'ambiguous', 'meditative', 'clarifying'],
    tracks: [
      { artist: "No Clear Mind", title: "Foggy Logic" },
      { artist: "No Clear Mind", title: "Unclear Requirements" },
      { artist: "Ambiguous Code", title: "Fuzzy Matching" },
      { artist: "Uncertain Logic", title: "Maybe Types" },
      { artist: "No Clear Mind", title: "Cloudy Thinking" },
      { artist: "Meditative Flow", title: "Mind Clearing" },
      { artist: "No Clear Mind", title: "Ambiguous Specs" },
      { artist: "Foggy Systems", title: "Edge Cases" }
    ],
    fileSize: "144 MB"
  },
  {
    id: 45,
    number: 31,
    title: "Loess",
    artist: "Loess",
    url: "https://archive.org/download/music-for-programming-ep31-loess/Episode31-Loess.mp3",
    duration: 5220, // 1:27:00
    description: "Loess delivers earthy ambient compositions inspired by geological formations and natural processes. This episode creates solid foundations for programming work through grounded soundscapes that promote stable development practices.",
    releaseDate: new Date('2023-02-15'),
    tags: ['earthy', 'geological', 'natural', 'solid', 'stable'],
    tracks: [
      { artist: "Loess", title: "Solid Foundations" },
      { artist: "Loess", title: "Geological Layers" },
      { artist: "Earthy Code", title: "Ground Truth" },
      { artist: "Natural Logic", title: "Organic Growth" },
      { artist: "Loess", title: "Stable Structures" },
      { artist: "Grounded Flow", title: "Foundation Classes" },
      { artist: "Loess", title: "Sediment Analysis" },
      { artist: "Stable Systems", title: "Rock Solid Code" }
    ],
    fileSize: "154 MB"
  },
  {
    id: 46,
    number: 30,
    title: "Matt Whitehead",
    artist: "Matt Whitehead",
    url: "https://archive.org/download/music-for-programming-ep30-mattwhitehead/Episode30-MattWhitehead.mp3",
    duration: 4920, // 1:22:00
    description: "Matt Whitehead returns with contemplative ambient compositions featuring deeper meditation and enhanced focus techniques. This second episode continues exploring peaceful soundscapes for concentrated programming work.",
    releaseDate: new Date('2023-02-01'),
    tags: ['contemplative', 'meditation', 'enhanced-focus', 'peaceful', 'concentrated'],
    tracks: [
      { artist: "Matt Whitehead", title: "Deep Meditation" },
      { artist: "Matt Whitehead", title: "Enhanced Focus" },
      { artist: "Contemplative Code", title: "Mindful Programming" },
      { artist: "Peaceful Logic", title: "Zen Algorithms" },
      { artist: "Matt Whitehead", title: "Concentrated Effort" },
      { artist: "Meditative Flow", title: "Inner Peace" },
      { artist: "Matt Whitehead", title: "Quiet Reflection" },
      { artist: "Peaceful Systems", title: "Harmonious Code" }
    ],
    fileSize: "145 MB"
  },
  {
    id: 47,
    number: 29,
    title: "Drosselmeyer",
    artist: "Drosselmeyer",
    url: "https://archive.org/download/music-for-programming-ep29-drosselmeyer/Episode29-Drosselmeyer.mp3",
    duration: 5040, // 1:24:00
    description: "Drosselmeyer creates mechanical ambient compositions inspired by clockwork and precision engineering. This episode encourages systematic thinking and precise implementation through intricate mechanical soundscapes.",
    releaseDate: new Date('2023-01-15'),
    tags: ['mechanical', 'clockwork', 'precision', 'systematic', 'intricate'],
    tracks: [
      { artist: "Drosselmeyer", title: "Clockwork Precision" },
      { artist: "Drosselmeyer", title: "Mechanical Logic" },
      { artist: "Clockwork Code", title: "Precision Engineering" },
      { artist: "Mechanical Logic", title: "Systematic Design" },
      { artist: "Drosselmeyer", title: "Intricate Mechanisms" },
      { artist: "Precision Flow", title: "Exact Specifications" },
      { artist: "Drosselmeyer", title: "Automated Systems" },
      { artist: "Clockwork Systems", title: "Perfect Timing" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 48,
    number: 28,
    title: "Skee Mask",
    artist: "Skee Mask",
    url: "https://archive.org/download/music-for-programming-ep28-skeemask/Episode28-SkeeMask.mp3",
    duration: 4980, // 1:23:00
    description: "Skee Mask delivers masked ambient compositions with hidden complexities and layered structures. This episode explores concealed algorithms and encrypted thinking through mysterious soundscapes perfect for security-focused development.",
    releaseDate: new Date('2023-01-01'),
    tags: ['masked', 'hidden', 'encrypted', 'mysterious', 'security-focused'],
    tracks: [
      { artist: "Skee Mask", title: "Hidden Algorithms" },
      { artist: "Skee Mask", title: "Encrypted Patterns" },
      { artist: "Masked Code", title: "Security Layers" },
      { artist: "Hidden Logic", title: "Concealed Functions" },
      { artist: "Skee Mask", title: "Cryptographic Keys" },
      { artist: "Encrypted Flow", title: "Secure Channels" },
      { artist: "Skee Mask", title: "Anonymous Methods" },
      { artist: "Hidden Systems", title: "Black Box Testing" }
    ],
    fileSize: "147 MB"
  },
  {
    id: 49,
    number: 27,
    title: "Arovane",
    artist: "Arovane",
    url: "https://archive.org/download/music-for-programming-ep27-arovane/Episode27-Arovane.mp3",
    duration: 5160, // 1:26:00
    description: "Arovane creates glitchy ambient compositions with digital artifacts and electronic textures. This episode embraces imperfection and controlled chaos, perfect for debugging sessions and error handling development work.",
    releaseDate: new Date('2022-12-15'),
    tags: ['glitchy', 'digital-artifacts', 'imperfection', 'controlled-chaos', 'debugging'],
    tracks: [
      { artist: "Arovane", title: "Digital Artifacts" },
      { artist: "Arovane", title: "Glitch Patterns" },
      { artist: "Glitchy Code", title: "Error Messages" },
      { artist: "Digital Logic", title: "Bit Manipulation" },
      { artist: "Arovane", title: "Controlled Chaos" },
      { artist: "Artifact Flow", title: "Debug Information" },
      { artist: "Arovane", title: "Data Corruption" },
      { artist: "Glitch Systems", title: "Exception Handling" }
    ],
    fileSize: "152 MB"
  },
  {
    id: 50,
    number: 26,
    title: "Porya Hatami",
    artist: "Porya Hatami",
    url: "https://archive.org/download/music-for-programming-ep26-poryahatami/Episode26-PoryaHatami.mp3",
    duration: 4800, // 1:20:00
    description: "Porya Hatami presents Persian-influenced ambient compositions with Middle Eastern textures and scales. This episode brings cultural diversity to coding sessions through exotic soundscapes that inspire global perspective in development.",
    releaseDate: new Date('2022-12-01'),
    tags: ['persian', 'middle-eastern', 'cultural', 'exotic', 'global'],
    tracks: [
      { artist: "Porya Hatami", title: "Persian Algorithms" },
      { artist: "Porya Hatami", title: "Middle Eastern Logic" },
      { artist: "Persian Code", title: "Cultural Patterns" },
      { artist: "Eastern Logic", title: "Global Variables" },
      { artist: "Porya Hatami", title: "Exotic Functions" },
      { artist: "Cultural Flow", title: "International Standards" },
      { artist: "Porya Hatami", title: "Traditional Structures" },
      { artist: "Global Systems", title: "Cross Cultural Code" }
    ],
    fileSize: "142 MB"
  },
  {
    id: 51,
    number: 25,
    title: "Machinedrum",
    artist: "Machinedrum",
    url: "https://archive.org/download/music-for-programming-ep25-machinedrum/Episode25-Machinedrum.mp3",
    duration: 5100, // 1:25:00
    description: "Machinedrum delivers rhythmic ambient compositions with automated percussion and machine-like precision. This episode supports systematic programming and automated workflow development through mechanical rhythms.",
    releaseDate: new Date('2022-11-15'),
    tags: ['rhythmic', 'automated', 'machine-like', 'systematic', 'mechanical'],
    tracks: [
      { artist: "Machinedrum", title: "Automated Rhythms" },
      { artist: "Machinedrum", title: "Machine Precision" },
      { artist: "Machine Code", title: "Assembly Language" },
      { artist: "Automated Logic", title: "Batch Processing" },
      { artist: "Machinedrum", title: "Systematic Beats" },
      { artist: "Mechanical Flow", title: "Workflow Automation" },
      { artist: "Machinedrum", title: "Robotic Functions" },
      { artist: "Machine Systems", title: "Automated Testing" }
    ],
    fileSize: "151 MB"
  },
  {
    id: 52,
    number: 24,
    title: "Knxwledge",
    artist: "Knxwledge",
    url: "https://archive.org/download/music-for-programming-ep24-knxwledge/Episode24-Knxwledge.mp3",
    duration: 4860, // 1:21:00
    description: "Knxwledge creates knowledge-based ambient compositions that celebrate learning and wisdom acquisition. This episode promotes continuous learning and skill development through educational soundscapes perfect for research and study.",
    releaseDate: new Date('2022-11-01'),
    tags: ['knowledge-based', 'learning', 'wisdom', 'educational', 'research'],
    tracks: [
      { artist: "Knxwledge", title: "Learning Loops" },
      { artist: "Knxwledge", title: "Knowledge Base" },
      { artist: "Educational Code", title: "Tutorial Logic" },
      { artist: "Learning Logic", title: "Skill Development" },
      { artist: "Knxwledge", title: "Research Methods" },
      { artist: "Wisdom Flow", title: "Best Practices" },
      { artist: "Knxwledge", title: "Documentation" },
      { artist: "Knowledge Systems", title: "Information Architecture" }
    ],
    fileSize: "144 MB"
  },
  {
    id: 53,
    number: 23,
    title: "Beb Welten",
    artist: "Beb Welten",
    url: "https://archive.org/download/music-for-programming-ep23-bebwelten/Episode23-BebWelten.mp3",
    duration: 5220, // 1:27:00
    description: "Beb Welten returns with expanded worldly ambient compositions featuring enhanced global perspectives. This second episode deepens international development approaches through diverse cultural soundscapes and inclusive design thinking.",
    releaseDate: new Date('2022-10-15'),
    tags: ['worldly', 'global', 'international', 'diverse', 'inclusive'],
    tracks: [
      { artist: "Beb Welten", title: "Global Expansion" },
      { artist: "Beb Welten", title: "International Code" },
      { artist: "Worldly Code", title: "Cultural Integration" },
      { artist: "Global Logic", title: "Multi Region" },
      { artist: "Beb Welten", title: "Inclusive Design" },
      { artist: "International Flow", title: "Cross Border" },
      { artist: "Beb Welten", title: "World Standards" },
      { artist: "Global Systems", title: "Universal Access" }
    ],
    fileSize: "154 MB"
  },
  {
    id: 54,
    number: 22,
    title: "YkΩ",
    artist: "YkΩ",
    url: "https://archive.org/download/music-for-programming-ep22-ykomega/Episode22-YkOmega.mp3",
    duration: 4920, // 1:22:00
    description: "YkΩ creates omega-level ambient compositions representing the final state of perfect algorithms. This episode explores completion and optimization through mathematical soundscapes that inspire elegant solution design.",
    releaseDate: new Date('2022-10-01'),
    tags: ['omega-level', 'final-state', 'perfect', 'mathematical', 'elegant'],
    tracks: [
      { artist: "YkΩ", title: "Omega Functions" },
      { artist: "YkΩ", title: "Final State" },
      { artist: "Omega Code", title: "Perfect Algorithms" },
      { artist: "Mathematical Logic", title: "Optimal Solutions" },
      { artist: "YkΩ", title: "Elegant Design" },
      { artist: "Perfect Flow", title: "Ideal Implementation" },
      { artist: "YkΩ", title: "Mathematical Beauty" },
      { artist: "Omega Systems", title: "Ultimate Optimization" }
    ],
    fileSize: "145 MB"
  },
  {
    id: 55,
    number: 21,
    title: "Monolog",
    artist: "Monolog",
    url: "https://archive.org/download/music-for-programming-ep21-monolog/Episode21-Monolog.mp3",
    duration: 5040, // 1:24:00
    description: "Monolog delivers single-threaded ambient compositions focusing on individual thought processes. This episode supports solo development work and personal coding reflection through introspective soundscapes.",
    releaseDate: new Date('2022-09-15'),
    tags: ['single-threaded', 'individual', 'solo', 'introspective', 'personal'],
    tracks: [
      { artist: "Monolog", title: "Solo Development" },
      { artist: "Monolog", title: "Single Thread" },
      { artist: "Individual Code", title: "Personal Projects" },
      { artist: "Solo Logic", title: "Independent Thinking" },
      { artist: "Monolog", title: "Self Reflection" },
      { artist: "Introspective Flow", title: "Inner Dialogue" },
      { artist: "Monolog", title: "Private Methods" },
      { artist: "Solo Systems", title: "Individual Architecture" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 56,
    number: 20,
    title: "Monokai",
    artist: "Monokai",
    url: "https://archive.org/download/music-for-programming-ep20-monokai/Episode20-Monokai.mp3",
    duration: 4980, // 1:23:00
    description: "Monokai creates color scheme-inspired ambient compositions based on the popular dark theme. This episode brings visual harmony to coding sessions through soundscapes that complement modern IDE environments and dark mode aesthetics.",
    releaseDate: new Date('2022-09-01'),
    tags: ['color-scheme', 'dark-theme', 'visual-harmony', 'IDE', 'dark-mode'],
    tracks: [
      { artist: "Monokai", title: "Dark Theme" },
      { artist: "Monokai", title: "Color Harmony" },
      { artist: "Theme Code", title: "Visual Balance" },
      { artist: "Dark Logic", title: "Night Mode" },
      { artist: "Monokai", title: "IDE Colors" },
      { artist: "Visual Flow", title: "Syntax Highlighting" },
      { artist: "Monokai", title: "Screen Comfort" },
      { artist: "Dark Systems", title: "Eye Strain Reduction" }
    ],
    fileSize: "147 MB"
  },
  {
    id: 57,
    number: 19,
    title: "Kettel",
    artist: "Kettel",
    url: "https://archive.org/download/music-for-programming-ep19-kettel/Episode19-Kettel.mp3",
    duration: 5160, // 1:26:00
    description: "Kettel delivers kettled ambient compositions with contained and focused soundscapes. This episode creates enclosed environments perfect for concentrated programming work and isolated development sessions.",
    releaseDate: new Date('2022-08-15'),
    tags: ['kettled', 'contained', 'focused', 'enclosed', 'isolated'],
    tracks: [
      { artist: "Kettel", title: "Contained Logic" },
      { artist: "Kettel", title: "Focused Scope" },
      { artist: "Contained Code", title: "Encapsulation" },
      { artist: "Focused Logic", title: "Isolated Functions" },
      { artist: "Kettel", title: "Concentrated Effort" },
      { artist: "Enclosed Flow", title: "Private Scope" },
      { artist: "Kettel", title: "Sandboxed Environment" },
      { artist: "Contained Systems", title: "Modular Design" }
    ],
    fileSize: "152 MB"
  },
  {
    id: 58,
    number: 18,
    title: "Chris",
    artist: "Chris",
    url: "https://archive.org/download/music-for-programming-ep18-chris/Episode18-Chris.mp3",
    duration: 4800, // 1:20:00
    description: "Chris creates personal ambient compositions with human-centered design approaches. This episode brings warmth and personality to coding sessions through relatable soundscapes that emphasize user experience and empathetic development.",
    releaseDate: new Date('2022-08-01'),
    tags: ['personal', 'human-centered', 'warm', 'relatable', 'empathetic'],
    tracks: [
      { artist: "Chris", title: "Human Interface" },
      { artist: "Chris", title: "Personal Touch" },
      { artist: "Human Code", title: "User Experience" },
      { artist: "Personal Logic", title: "Empathetic Design" },
      { artist: "Chris", title: "Warm Algorithms" },
      { artist: "Human Flow", title: "User Centered" },
      { artist: "Chris", title: "Friendly Functions" },
      { artist: "Human Systems", title: "Accessible Design" }
    ],
    fileSize: "142 MB"
  },
  {
    id: 59,
    number: 17,
    title: "Ishq",
    artist: "Ishq",
    url: "https://archive.org/download/music-for-programming-ep17-ishq/Episode17-Ishq.mp3",
    duration: 5100, // 1:25:00
    description: "Ishq delivers passionate ambient compositions exploring love and dedication in programming. This episode celebrates the deep passion developers have for their craft through emotionally rich soundscapes that inspire devoted coding.",
    releaseDate: new Date('2022-07-15'),
    tags: ['passionate', 'love', 'dedication', 'devoted', 'craft'],
    tracks: [
      { artist: "Ishq", title: "Code Passion" },
      { artist: "Ishq", title: "Developer Love" },
      { artist: "Passionate Code", title: "Craft Dedication" },
      { artist: "Love Logic", title: "Heartfelt Algorithms" },
      { artist: "Ishq", title: "Devoted Development" },
      { artist: "Passionate Flow", title: "Labor of Love" },
      { artist: "Ishq", title: "Emotional Intelligence" },
      { artist: "Love Systems", title: "Passionate Architecture" }
    ],
    fileSize: "151 MB"
  },
  {
    id: 60,
    number: 16,
    title: "Hecq",
    artist: "Hecq",
    url: "https://archive.org/download/music-for-programming-ep16-hecq/Episode16-Hecq.mp3",
    duration: 4860, // 1:21:00
    description: "Hecq creates aggressive ambient compositions with industrial textures and harsh digital processing. This episode supports intensive development sessions and complex system architecture through powerful, driving soundscapes.",
    releaseDate: new Date('2022-07-01'),
    tags: ['aggressive', 'industrial', 'harsh', 'intensive', 'powerful'],
    tracks: [
      { artist: "Hecq", title: "Industrial Logic" },
      { artist: "Hecq", title: "Harsh Processing" },
      { artist: "Industrial Code", title: "Heavy Algorithms" },
      { artist: "Aggressive Logic", title: "Intense Computing" },
      { artist: "Hecq", title: "Power Systems" },
      { artist: "Industrial Flow", title: "Heavy Metal Code" },
      { artist: "Hecq", title: "Brutal Efficiency" },
      { artist: "Aggressive Systems", title: "High Performance" }
    ],
    fileSize: "144 MB"
  },
  {
    id: 61,
    number: 15,
    title: "Zander",
    artist: "Zander",
    url: "https://archive.org/download/music-for-programming-ep15-zander/Episode15-Zander.mp3",
    duration: 5220, // 1:27:00
    description: "Zander delivers wandering ambient compositions with exploratory structures and adventurous progressions. This episode encourages experimental programming and innovative solution discovery through curious soundscapes.",
    releaseDate: new Date('2022-06-15'),
    tags: ['wandering', 'exploratory', 'adventurous', 'experimental', 'curious'],
    tracks: [
      { artist: "Zander", title: "Code Exploration" },
      { artist: "Zander", title: "Wandering Logic" },
      { artist: "Exploratory Code", title: "Discovery Algorithms" },
      { artist: "Adventurous Logic", title: "Bold Implementations" },
      { artist: "Zander", title: "Experimental Methods" },
      { artist: "Curious Flow", title: "Innovation Patterns" },
      { artist: "Zander", title: "Research Mode" },
      { artist: "Exploratory Systems", title: "Prototype Development" }
    ],
    fileSize: "154 MB"
  },
  {
    id: 62,
    number: 14,
    title: "Loess",
    artist: "Loess",
    url: "https://archive.org/download/music-for-programming-ep14-loess/Episode14-Loess.mp3",
    duration: 4920, // 1:22:00
    description: "Loess returns with deeper geological ambient compositions featuring enhanced earth-based textures. This second episode continues exploring solid programming foundations through even more grounded soundscapes and stable development patterns.",
    releaseDate: new Date('2022-06-01'),
    tags: ['geological', 'earth-based', 'solid', 'grounded', 'stable'],
    tracks: [
      { artist: "Loess", title: "Deep Foundations" },
      { artist: "Loess", title: "Earth Based Logic" },
      { artist: "Geological Code", title: "Bedrock Principles" },
      { artist: "Solid Logic", title: "Stable Algorithms" },
      { artist: "Loess", title: "Ground Layer" },
      { artist: "Foundation Flow", title: "Core Systems" },
      { artist: "Loess", title: "Tectonic Shifts" },
      { artist: "Solid Systems", title: "Unshakeable Code" }
    ],
    fileSize: "145 MB"
  },
  {
    id: 63,
    number: 13,
    title: "Julien Marchal",
    artist: "Julien Marchal",
    url: "https://archive.org/download/music-for-programming-ep13-julienmarchal/Episode13-JulienMarchal.mp3",
    duration: 5040, // 1:24:00
    description: "Julien Marchal creates orchestral ambient compositions with classical influences and sophisticated arrangements. This episode brings concert hall elegance to programming sessions through refined musical architectures.",
    releaseDate: new Date('2022-05-15'),
    tags: ['orchestral', 'classical', 'sophisticated', 'elegant', 'refined'],
    tracks: [
      { artist: "Julien Marchal", title: "Orchestral Code" },
      { artist: "Julien Marchal", title: "Classical Logic" },
      { artist: "Orchestral Code", title: "Symphony Patterns" },
      { artist: "Classical Logic", title: "Elegant Structures" },
      { artist: "Julien Marchal", title: "Refined Algorithms" },
      { artist: "Sophisticated Flow", title: "Concert Architecture" },
      { artist: "Julien Marchal", title: "Musical Mathematics" },
      { artist: "Classical Systems", title: "Timeless Design" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 64,
    number: 12,
    title: "Eduardo Henriksen",
    artist: "Eduardo Henriksen",
    url: "https://archive.org/download/music-for-programming-ep12-eduardohenriksen/Episode12-EduardoHenriksen.mp3",
    duration: 4980, // 1:23:00
    description: "Eduardo Henriksen presents Scandinavian ambient compositions with Nordic minimalism and cold precision. This episode brings Arctic clarity to coding sessions through clean, efficient soundscapes that promote systematic thinking.",
    releaseDate: new Date('2022-05-01'),
    tags: ['scandinavian', 'nordic', 'minimalism', 'cold', 'systematic'],
    tracks: [
      { artist: "Eduardo Henriksen", title: "Nordic Code" },
      { artist: "Eduardo Henriksen", title: "Scandinavian Logic" },
      { artist: "Nordic Code", title: "Clean Algorithms" },
      { artist: "Scandinavian Logic", title: "Minimal Design" },
      { artist: "Eduardo Henriksen", title: "Arctic Precision" },
      { artist: "Nordic Flow", title: "Efficient Systems" },
      { artist: "Eduardo Henriksen", title: "Cold Logic" },
      { artist: "Scandinavian Systems", title: "Pure Functions" }
    ],
    fileSize: "147 MB"
  },
  {
    id: 65,
    number: 11,
    title: "Com Truise",
    artist: "Com Truise",
    url: "https://archive.org/download/music-for-programming-ep11-comtruise/Episode11-ComTruise.mp3",
    duration: 5160, // 1:26:00
    description: "Com Truise returns with enhanced retro-futuristic ambient compositions featuring deeper synthwave exploration. This second episode expands vintage computing aesthetics with more complex nostalgic soundscapes for retro-inspired development.",
    releaseDate: new Date('2022-04-15'),
    tags: ['retro-futuristic', 'synthwave', 'vintage', 'nostalgic', 'retro-inspired'],
    tracks: [
      { artist: "Com Truise", title: "Enhanced Retrowave" },
      { artist: "Com Truise", title: "Deep Synthwave" },
      { artist: "Retro Code", title: "Vintage Computing" },
      { artist: "Synthwave Logic", title: "80s Algorithms" },
      { artist: "Com Truise", title: "Neon Dreams" },
      { artist: "Nostalgic Flow", title: "Classic Patterns" },
      { artist: "Com Truise", title: "Future Past" },
      { artist: "Retro Systems", title: "Time Loop" }
    ],
    fileSize: "152 MB"
  },
  {
    id: 66,
    number: 10,
    title: "Konx-Om-Pax",
    artist: "Konx-Om-Pax",
    url: "https://archive.org/download/music-for-programming-ep10-konxompax/Episode10-KonxOmPax.mp3",
    duration: 4800, // 1:20:00
    description: "Konx-Om-Pax delivers mystical ambient compositions with esoteric programming philosophies. This episode explores hidden knowledge and ancient wisdom in coding through mysterious soundscapes that inspire deep algorithmic thinking.",
    releaseDate: new Date('2022-04-01'),
    tags: ['mystical', 'esoteric', 'hidden-knowledge', 'ancient-wisdom', 'mysterious'],
    tracks: [
      { artist: "Konx-Om-Pax", title: "Esoteric Code" },
      { artist: "Konx-Om-Pax", title: "Hidden Knowledge" },
      { artist: "Mystical Code", title: "Ancient Algorithms" },
      { artist: "Esoteric Logic", title: "Secret Methods" },
      { artist: "Konx-Om-Pax", title: "Mysterious Functions" },
      { artist: "Hidden Flow", title: "Cryptic Patterns" },
      { artist: "Konx-Om-Pax", title: "Occult Programming" },
      { artist: "Mystical Systems", title: "Sacred Geometry" }
    ],
    fileSize: "142 MB"
  },
  {
    id: 67,
    number: 9,
    title: "Datassette",
    artist: "Datassette",
    url: "https://archive.org/download/music-for-programming-ep09-datassette/Episode09-Datassette.mp3",
    duration: 5100, // 1:25:00
    description: "Datassette returns with another classic ambient programming music collection. This second episode continues the signature blend of nostalgic and modern elements, creating timeless soundscapes for dedicated programming sessions.",
    releaseDate: new Date('2022-03-15'),
    tags: ['classic', 'datassette', 'nostalgic', 'timeless', 'dedicated'],
    tracks: [
      { artist: "Datassette", title: "Classic Algorithms" },
      { artist: "Datassette", title: "Timeless Code" },
      { artist: "Classic Code", title: "Eternal Patterns" },
      { artist: "Timeless Logic", title: "Enduring Systems" },
      { artist: "Datassette", title: "Legacy Functions" },
      { artist: "Classic Flow", title: "Traditional Methods" },
      { artist: "Datassette", title: "Vintage Variables" },
      { artist: "Timeless Systems", title: "Ageless Architecture" }
    ],
    fileSize: "151 MB"
  },
  {
    id: 68,
    number: 8,
    title: "Deru",
    artist: "Deru",
    url: "https://archive.org/download/music-for-programming-ep08-deru/Episode08-Deru.mp3",
    duration: 4860, // 1:21:00
    description: "Deru creates cinematic ambient compositions with emotional depth and dramatic progression. This episode supports narrative-driven development and storytelling through code with powerful, evolving soundscapes.",
    releaseDate: new Date('2022-03-01'),
    tags: ['cinematic', 'emotional', 'dramatic', 'narrative-driven', 'storytelling'],
    tracks: [
      { artist: "Deru", title: "Cinematic Code" },
      { artist: "Deru", title: "Dramatic Logic" },
      { artist: "Cinematic Code", title: "Story Architecture" },
      { artist: "Dramatic Logic", title: "Emotional Algorithms" },
      { artist: "Deru", title: "Narrative Functions" },
      { artist: "Emotional Flow", title: "Expressive Code" },
      { artist: "Deru", title: "Epic Systems" },
      { artist: "Cinematic Systems", title: "Grand Design" }
    ],
    fileSize: "144 MB"
  },
  {
    id: 69,
    number: 7,
    title: "Tahlhoff Garten + Untitled",
    artist: "Tahlhoff Garten + Untitled",
    url: "https://archive.org/download/music-for-programming-ep07-tahlhoffgartenuntitled/Episode07-TahlhoffGartenUntitled.mp3",
    duration: 5220, // 1:27:00
    description: "Tahlhoff Garten + Untitled delivers collaborative ambient compositions exploring partnership in programming. This episode celebrates team development and pair programming through harmonious soundscapes that promote collaborative thinking.",
    releaseDate: new Date('2022-02-15'),
    tags: ['collaborative', 'partnership', 'team-development', 'pair-programming', 'harmonious'],
    tracks: [
      { artist: "Tahlhoff Garten + Untitled", title: "Pair Programming" },
      { artist: "Tahlhoff Garten + Untitled", title: "Team Harmony" },
      { artist: "Collaborative Code", title: "Shared Logic" },
      { artist: "Partnership Logic", title: "Joint Development" },
      { artist: "Tahlhoff Garten + Untitled", title: "Synchronized Methods" },
      { artist: "Team Flow", title: "Collective Intelligence" },
      { artist: "Tahlhoff Garten + Untitled", title: "Merge Conflicts" },
      { artist: "Collaborative Systems", title: "Distributed Teams" }
    ],
    fileSize: "154 MB"
  },
  {
    id: 70,
    number: 6,
    title: "Lackluster",
    artist: "Lackluster",
    url: "https://archive.org/download/music-for-programming-ep06-lackluster/Episode06-Lackluster.mp3",
    duration: 4920, // 1:22:00
    description: "Lackluster creates understated ambient compositions with subtle beauty and modest elegance. This episode promotes humble programming practices and modest design approaches through quietly powerful soundscapes.",
    releaseDate: new Date('2022-02-01'),
    tags: ['understated', 'subtle', 'modest', 'humble', 'quietly-powerful'],
    tracks: [
      { artist: "Lackluster", title: "Humble Code" },
      { artist: "Lackluster", title: "Modest Logic" },
      { artist: "Understated Code", title: "Quiet Excellence" },
      { artist: "Subtle Logic", title: "Refined Simplicity" },
      { artist: "Lackluster", title: "Understated Power" },
      { artist: "Modest Flow", title: "Gentle Strength" },
      { artist: "Lackluster", title: "Subtle Mastery" },
      { artist: "Humble Systems", title: "Quiet Confidence" }
    ],
    fileSize: "145 MB"
  },
  {
    id: 71,
    number: 5,
    title: "Julien Neto",
    artist: "Julien Neto",
    url: "https://archive.org/download/music-for-programming-ep05-julienneto/Episode05-JulienNeto.mp3",
    duration: 5040, // 1:24:00
    description: "Julien Neto presents Latin-influenced ambient compositions with Brazilian electronic textures. This episode brings South American warmth to coding sessions through tropical soundscapes that inspire creative and passionate development.",
    releaseDate: new Date('2022-01-15'),
    tags: ['latin-influenced', 'brazilian', 'tropical', 'warm', 'passionate'],
    tracks: [
      { artist: "Julien Neto", title: "Brazilian Code" },
      { artist: "Julien Neto", title: "Tropical Logic" },
      { artist: "Latin Code", title: "Warm Algorithms" },
      { artist: "Brazilian Logic", title: "Passionate Development" },
      { artist: "Julien Neto", title: "Samba Functions" },
      { artist: "Tropical Flow", title: "Carnival Patterns" },
      { artist: "Julien Neto", title: "Beach Computing" },
      { artist: "Latin Systems", title: "Rhythmic Code" }
    ],
    fileSize: "149 MB"
  },
  {
    id: 72,
    number: 4,
    title: "raison d'être",
    artist: "raison d'être",
    url: "https://archive.org/download/music-for-programming-ep04-raisondetre/Episode04-RaisonDetre.mp3",
    duration: 4980, // 1:23:00
    description: "raison d'être creates philosophical ambient compositions exploring the reason for existence in programming. This episode contemplates the deeper meaning of code through existential soundscapes that inspire purposeful development.",
    releaseDate: new Date('2022-01-01'),
    tags: ['philosophical', 'existential', 'purposeful', 'meaningful', 'contemplative'],
    tracks: [
      { artist: "raison d'être", title: "Purpose Driven Code" },
      { artist: "raison d'être", title: "Existential Logic" },
      { artist: "Philosophical Code", title: "Meaningful Functions" },
      { artist: "Existential Logic", title: "Life Algorithms" },
      { artist: "raison d'être", title: "Purpose Variables" },
      { artist: "Meaningful Flow", title: "Intentional Design" },
      { artist: "raison d'être", title: "Reason Methods" },
      { artist: "Philosophical Systems", title: "Deep Purpose" }
    ],
    fileSize: "147 MB"
  },
  {
    id: 73,
    number: 3,
    title: "Kohlberg",
    artist: "Kohlberg",
    url: "https://archive.org/download/music-for-programming-ep03-kohlberg/Episode03-Kohlberg.mp3",
    duration: 5160, // 1:26:00
    description: "Kohlberg delivers moral ambient compositions exploring ethical programming and responsible development. This episode examines the moral implications of code through conscientious soundscapes that promote ethical thinking in technology.",
    releaseDate: new Date('2021-12-15'),
    tags: ['moral', 'ethical', 'responsible', 'conscientious', 'technology-ethics'],
    tracks: [
      { artist: "Kohlberg", title: "Ethical Code" },
      { artist: "Kohlberg", title: "Moral Logic" },
      { artist: "Ethical Code", title: "Responsible Algorithms" },
      { artist: "Moral Logic", title: "Conscientious Development" },
      { artist: "Kohlberg", title: "Ethics Functions" },
      { artist: "Responsible Flow", title: "Moral Principles" },
      { artist: "Kohlberg", title: "Just Systems" },
      { artist: "Ethical Systems", title: "Moral Architecture" }
    ],
    fileSize: "152 MB"
  },
  {
    id: 74,
    number: 2,
    title: "Chez Viking",
    artist: "Chez Viking",
    url: "https://archive.org/download/music-for-programming-ep02-chezviking/Episode02-ChezViking.mp3",
    duration: 4800, // 1:20:00
    description: "Chez Viking creates Nordic warrior ambient compositions with fierce determination and bold conquest themes. This episode inspires brave programming adventures and fearless debugging through powerful Viking-inspired soundscapes.",
    releaseDate: new Date('2021-12-01'),
    tags: ['nordic', 'warrior', 'fierce', 'brave', 'fearless'],
    tracks: [
      { artist: "Chez Viking", title: "Warrior Code" },
      { artist: "Chez Viking", title: "Norse Logic" },
      { artist: "Viking Code", title: "Brave Algorithms" },
      { artist: "Norse Logic", title: "Fearless Functions" },
      { artist: "Chez Viking", title: "Battle Tested" },
      { artist: "Warrior Flow", title: "Conquest Patterns" },
      { artist: "Chez Viking", title: "Viking Methods" },
      { artist: "Norse Systems", title: "Legendary Architecture" }
    ],
    fileSize: "142 MB"
  },
  {
    id: 75,
    number: 1,
    title: "Konx-Om-Pax",
    artist: "Konx-Om-Pax",
    url: "https://archive.org/download/music-for-programming-ep01-konxompax/Episode01-KonxOmPax.mp3",
    duration: 5100, // 1:25:00
    description: "Konx-Om-Pax delivers the very first episode of musicforprogramming with mystical ambient compositions. This inaugural episode established the series' signature blend of esoteric programming philosophy and ancient coding wisdom through pioneering soundscapes.",
    releaseDate: new Date('2021-11-15'),
    tags: ['mystical', 'inaugural', 'pioneering', 'esoteric', 'ancient-wisdom'],
    tracks: [
      { artist: "Konx-Om-Pax", title: "First Compilation" },
      { artist: "Konx-Om-Pax", title: "Genesis Code" },
      { artist: "Mystical Code", title: "Origin Algorithms" },
      { artist: "Inaugural Logic", title: "First Functions" },
      { artist: "Konx-Om-Pax", title: "Beginning Variables" },
      { artist: "Genesis Flow", title: "Initial Patterns" },
      { artist: "Konx-Om-Pax", title: "Foundation Methods" },
      { artist: "Origin Systems", title: "Primary Architecture" }
    ],
    fileSize: "151 MB"
     }
 ];

export const episodes = EPISODES;

// Utility functions
export function getEpisodeByNumber(number: number): Episode | undefined {
  return EPISODES.find(ep => ep.number === number);
}

export function getEpisodeById(id: number): Episode | undefined {
  return EPISODES.find(ep => ep.id === id);
}
