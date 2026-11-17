export type SiteLang = 'en' | 'zh' | 'ja';
export type AiProviderId = 'chatgpt' | 'claude' | 'gemini';

export interface WorkRepo {
  title: string;
  lang: string;
  langColor: string;
  stars: number;
  isPrivate?: boolean;
  description: string;
  url: string;
  xUrl?: string;
}

export interface CareerEntry {
  date: string;
  tag: string;
  title: string;
  desc: string;
}

export const SITE_URL = 'https://clark970417-eng.github.io/my-portfolio/';

export const works: WorkRepo[] = [
  {
    title: 'miu-pocket',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 2,
    description: 'Local-first PWA for notes, tools & self-hosted AI.',
    url: 'https://github.com/clark970417-eng/miu-pocket',
  },
  {
    title: 'VocaLume',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 44,
    description: 'Offline AI live captions & chat translator.',
    url: 'https://github.com/clark970417-eng/VocaLume',
    xUrl: 'https://x.com/4yuying/status/2117992765053374788?a=jvwbRLbI5FBCO4cYg_M&s=20',
  },
  {
    title: 'lumen-stage',
    lang: 'TypeScript',
    langColor: '#3178c6',
    stars: 2,
    description: '3D virtual studio to test lighting & cameras.',
    url: 'https://github.com/clark970417-eng/lumen-stage',
  },
  {
    title: 'kano-record-shelf',
    lang: 'JavaScript',
    langColor: '#f1e05a',
    stars: 1,
    isPrivate: true,
    description: 'Touch-friendly 3D Kano album shelf & CD menu.',
    url: 'https://github.com/clark970417-eng/kano-record-shelf',
  },
];

export const career: CareerEntry[] = [
  { date: '2026.11', tag: 'RELEASE', title: 'Launched Portfolio', desc: 'Built with Astro combining terminal, GitHub pins, polaroids, and dock.' },
  { date: '2026.11', tag: 'HACKATHON', title: 'Joined NASA Challenge App Hackathon', desc: 'Collaborated on space data and app prototypes during a live sprint.' },
  { date: '2026.08', tag: 'LEADERSHIP', title: 'Became School Photography Head', desc: 'Led event coverage, club workshops, and school photo curation.' },
  { date: '2026.07', tag: 'DEV', title: 'Started Building Software & AI Tools', desc: 'Developing VocaLume, local-first AI agents, and hardware-software projects.' },
  { date: '2026.05', tag: 'EXAM', title: 'Earned AP CSA 5', desc: 'Achieved a top score of 5 on the AP Computer Science A exam.' },
  { date: '2023.08', tag: 'PHOTOGRAPHY', title: 'Started Photography', desc: 'Began shooting event and portrait photography.' },
];

export const kanoReleases = [
  {
    title: 'day by day',
    album: 'アルストロメリア',
    coverFile: 'alstroemeria.webp',
    discFile: 'alstroemeria-disc.webp',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/79/fc/a2/79fca202-e773-8701-8223-d1a0e1018729/mzaf_13227580322861100008.plus.aac.p.m4a',
    search: '鹿乃 day by day',
    wash: 'rgba(201, 107, 136, 0.14)',
    accent: '#c96b88',
  },
  {
    title: 'ハロ/ハワユ',
    album: 'rye',
    coverFile: 'rye.webp',
    discFile: 'rye-disc.webp',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/41/28/ac/4128acaf-286d-c9cf-eab6-cb37ffbe6b86/mzaf_16597929563052818030.plus.aac.p.m4a',
    search: '鹿乃 ハロ ハワユ',
    wash: 'rgba(92, 131, 173, 0.14)',
    accent: '#5c83ad',
  },
  {
    title: 'Stella-rium',
    album: 'nowhere',
    coverFile: 'nowhere.webp',
    discFile: 'nowhere-disc.webp',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/9a/69/dd/9a69ddeb-5e90-7c9a-5bb2-0f7d2736f083/mzaf_16332241899116623014.plus.aac.p.m4a',
    search: '鹿乃 Stella-rium',
    wash: 'rgba(216, 152, 82, 0.15)',
    accent: '#d49446',
  },
  {
    title: 'nameless',
    album: 'nameless - EP',
    coverFile: 'nameless.webp',
    discFile: 'nameless-disc.webp',
    preview: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/b1/0f/b1/b10fb16a-3377-f499-d650-ce129de16f96/mzaf_1504223347238372062.plus.aac.p.m4a',
    search: '鹿乃 nameless',
    wash: 'rgba(184, 78, 86, 0.14)',
    accent: '#b84e56',
  },
];

export const aiProviderMeta: Record<AiProviderId, { label: string; tag: string; prefix: Record<SiteLang, string> }> = {
  chatgpt: {
    label: 'ChatGPT',
    tag: 'GPT-4o',
    prefix: { en: '[ChatGPT] ', zh: '[ChatGPT] ', ja: '[ChatGPT] ' },
  },
  claude: {
    label: 'Claude',
    tag: 'Sonnet',
    prefix: {
      en: '[Claude] Here is a concise overview: ',
      zh: '[Claude] 幫你整理重點：',
      ja: '[Claude] 要点をまとめると、',
    },
  },
  gemini: {
    label: 'Gemini',
    tag: 'Pro',
    prefix: {
      en: '[Gemini] Quick summary: ',
      zh: '[Gemini] 快速摘要：',
      ja: '[Gemini] クイック要約：',
    },
  },
};

export const i18nData = {
  en: {
    htmlLang: 'en',
    bio: 'Taiwan, High School Senior, Photographer, Indie Dev & AI Engineer',
    welcome: "Hi! I'm YuYing, a high school senior from Taiwan — Photographer, Indie Dev & AI Engineer. Ask me anything!",
    draftPlaceholder: 'Select a question above...',
    worksSub: 'Pinned repositories',
    photoSub: 'Click cover to view all',
    careerSub: 'Timeline',
    vocaSub: 'Translate site',
    chatHint: '← Clickable',
    reopen: '↺ Reopen yuying-profile.exe',
    photoCountSuffix: 'photos',
    photoOther: 'Other',
    resetPhotos: '↺ Reset photos',
    photoTapeLabel: 'Peel photo',
    photoTapeTitle: 'Click tape to peel photo',
    gizmoTitle: '3D view · Click to reset 45°',
    playTitle: 'Play / Pause',
    previewUnavailable: 'Preview unavailable',
    chips: { build: 'Projects?', stack: 'Stack?', photo: 'Photo?', contact: 'Contact?' },
    chipQuestions: {
      build: 'What do you build?',
      stack: 'What is your tech stack?',
      photo: 'Tell me about your photography',
      contact: 'How can I contact you?',
    },
    replies: {
      build: 'I build local-first AI tools like VocaLume (live bilingual captions), miu-pocket (offline companion PWA), lumen-stage (3D studio lighting), and VEX / Arduino hardware projects.',
      stack: 'TypeScript, JavaScript, Python, Java (AP CSA 5), Astro, Three.js, Electron, React, PWA, and VEX / Arduino robotics.',
      photo: 'I shoot mostly portrait and event photos using 35mm, 50mm, and 85mm lenses—and I want to try landscape photography next! I also built lumen-stage to simulate 3D studio lighting.',
      contact: 'Email me at clark970417@gmail.com, reach me on X @4yuying, or check my GitHub clark970417-eng.',
    },
    repos: Object.fromEntries(works.map((w) => [w.title, w.description])),
    career: career.map(({ title, desc }) => ({ title, desc })),
  },
  zh: {
    htmlLang: 'zh-Hant',
    bio: '台灣 · 高中生 · 攝影師 · 獨立開發與 AI 工程師',
    welcome: '嗨！我是來自台灣的 YuYing，目前是高中生——也是攝影師、獨立開發者與 AI 工程師。歡迎點下方問題認識我！',
    draftPlaceholder: '請點選上方問題…',
    worksSub: '釘選作品倉庫',
    photoSub: '點擊封面看全部照片',
    careerSub: '成長時間軸',
    vocaSub: '已轉繁體中文',
    chatHint: '← 可點擊',
    reopen: '↺ 重新開啟 yuying-profile.exe',
    photoCountSuffix: '張照片',
    photoOther: '其他',
    resetPhotos: '↺ 重設相片',
    photoTapeLabel: '撕掉相片',
    photoTapeTitle: '點膠帶撕掉相片',
    gizmoTitle: '3D 視角 · 點擊還原 45°',
    playTitle: '播放 / 暫停',
    previewUnavailable: '無法載入試聽',
    chips: { build: '做過什麼？', stack: '技術棧？', photo: '攝影風格？', contact: '怎麼聯絡？' },
    chipQuestions: {
      build: '你平時都在開發什麼專案？',
      stack: '你常用的程式語言與框架？',
      photo: '聊聊你的攝影作品與器材？',
      contact: '要怎麼聯絡你？',
    },
    replies: {
      build: '我開發本機優先的工具與 AI 應用，像是 VocaLume（即時雙語字幕翻譯）、miu-pocket（離線伴侶 PWA）、lumen-stage（3D 攝影棚打光模擬）以及 VEX／Arduino 硬體專案。',
      stack: 'TypeScript、JavaScript、Python、Java（AP CSA 5）、Astro、Three.js、Electron、React、PWA 與 VEX／Arduino 機器人控制。',
      photo: '我平時主要拍攝人像與活動寫真，常用 35mm、50mm 與 85mm 定焦鏡，未來想挑戰風景攝影，也做了 lumen-stage 來預先模擬 3D 棚拍燈光！',
      contact: '歡迎寫信到 clark970417@gmail.com、在 X 找 @4yuying，或逛逛我的 GitHub clark970417-eng。',
    },
    repos: {
      'miu-pocket': '本機優先隨身 PWA，整合筆記、工具與自架 AI。',
      VocaLume: '離線 AI 即時雙語字幕與聊天室翻譯工具。',
      'lumen-stage': '3D 虛擬攝影棚，測試燈光與相機設定。',
      'kano-record-shelf': '支援觸控的 3D 鹿乃專輯櫃與 CD 試聽選單。',
    },
    career: [
      { title: '上線個人作品集', desc: '使用 Astro 製作，結合終端機對話、GitHub 卡片、拍立得相簿與 Dock。' },
      { title: '參加 NASA Challenge App 黑客松', desc: '團隊協作進行太空資料應用開發與黑客松實作挑戰。' },
      { title: '擔任學校攝影社社長', desc: '負責校園活動拍攝紀錄、器材交流與社團策展帶領。' },
      { title: '投入軟體與 AI 工具開發', desc: '持續打造 VocaLume、本機端 AI 助理與軟硬體整合專案。' },
      { title: '考取 AP CSA 滿分 5', desc: '於 AP Computer Science A（Java）測驗取得滿分 5 分。' },
      { title: '開始攝影紀錄', desc: '從活動紀實與人像寫真開啟攝影之路。' },
    ],
  },
  ja: {
    htmlLang: 'ja',
    bio: '台湾 · 高校生 · フォトグラファー · 個人開発 & AI エンジニア',
    welcome: 'こんにちは！台湾の高校生 YuYing です。フォトグラファー・個人開発者・AI エンジニアとして活動しています。何でも聞いてね！',
    draftPlaceholder: '上の質問を選んでください…',
    worksSub: 'ピン留めリポジトリ',
    photoSub: 'カバーをクリックして全表示',
    careerSub: 'タイムライン',
    vocaSub: '日本語に翻訳中',
    chatHint: '← クリック可',
    reopen: '↺ yuying-profile.exe を再開',
    photoCountSuffix: '枚',
    photoOther: 'その他',
    resetPhotos: '↺ 写真を戻す',
    photoTapeLabel: '写真をはがす',
    photoTapeTitle: 'テープをクリックしてはがす',
    gizmoTitle: '3D ビュー · クリックで 45° にリセット',
    playTitle: '再生 / 一時停止',
    previewUnavailable: '試聴できません',
    chips: { build: '制作物は？', stack: '技術スタック？', photo: '写真について？', contact: '連絡先は？' },
    chipQuestions: {
      build: '普段どんなアプリを作っていますか？',
      stack: 'よく使うプログラミング言語や技術は？',
      photo: '使っているレンズや写真のスタイルは？',
      contact: '連絡方法を教えてください。',
    },
    replies: {
      build: 'VocaLume（リアルタイム二言語字幕・チャット翻訳）、miu-pocket（ローカル優先PWA）、lumen-stage（3Dスタジオ照明シミュレータ）、VEX / Arduino などを開発しています。',
      stack: 'TypeScript、JavaScript、Python、Java（AP CSA 5）、Astro、Three.js、Electron、React、PWA、VEX / Arduino ロボティクスです。',
      photo: '普段は 35mm・50mm・85mm レンズでポートレートやイベント写真を撮影していて、今後は風景撮影にも挑戦したいです！3D照明練習用に lumen-stage も作りました。',
      contact: 'メール（clark970417@gmail.com）、X（@4yuying）、または GitHub（clark970417-eng）からお気軽にご連絡ください。',
    },
    repos: {
      'miu-pocket': 'ローカル優先のメモ・ツール＆自ホストAI PWA。',
      VocaLume: 'ローカルAIの即時二言語字幕＆チャット翻訳。',
      'lumen-stage': '照明とカメラ設定を試せる 3D 撮影スタジオ。',
      'kano-record-shelf': 'タッチ対応の 3D 鹿乃アルバム＆CD 試聴棚。',
    },
    career: [
      { title: 'ポートフォリオ公開', desc: 'Astroで制作。ターミナル、GitHubピン、ポラロイド、Dockを統合。' },
      { title: 'NASA Challenge App ハッカソン参加', desc: 'チームで宇宙データ活用とアプリ開発のスプリントに挑戦。' },
      { title: '学校写真部 部長に就任', desc: 'イベント撮影の指揮や部活動の運営・作品キュレーションを担当。' },
      { title: 'ソフトウェア & AIツール開発開始', desc: 'VocaLume、ローカルAIエージェント、ハードウェア連携を開発中。' },
      { title: 'AP CSA 満点 5 を取得', desc: 'Java を用いた AP Computer Science A 試験で最高点 5 を獲得。' },
      { title: '写真を始める', desc: 'イベントやポートレート撮影をスタート。' },
    ],
  },
} as const;

export const kanoArtistByLang: Record<SiteLang, string> = {
  en: 'Kano',
  zh: '鹿乃',
  ja: '鹿乃',
};

export const vocaPairMap: Record<SiteLang, string> = {
  en: 'EN ↔ 中文',
  zh: '繁中 ↔ EN',
  ja: '日本語 ↔ 中文',
};

/** Resolve public photo/cover path to its generated 560px WebP thumbnail under /thumbs/. */
export const toThumbPath = (publicRelPath: string) =>
  `/thumbs/${publicRelPath.replace(/^\//, '').replace(/\.[^.]+$/, '.webp')}`;
