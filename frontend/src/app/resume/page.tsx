'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'profile', label: '프로필' },
  { id: 'experience', label: '경력' },
  { id: 'education', label: '학력' },
  { id: 'skills', label: '스킬' },
  { id: 'introduction', label: '자기소개서' },
];

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // 페이지 하단에 도달하면 마지막 섹션 활성화
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      if (isAtBottom) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      // 각 섹션의 실제 document 기준 위치 계산
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        if (sectionTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const resumeData = {
    name: '김111성우',
    title: 'Backend / DevOps Engineer (3년차)',
    email: 'bottlek3595@gmail.com',
    phone: '010-6683-1291',
    github: 'github.com/chefii/techlog',
    website: 'techlog-philip.vercel.app/resume',
    location: '서울 은평구',
    highlights: [
      { label: '성능 개선', value: '60%', desc: '응답속도' },
      { label: '처리시간', value: '60%', desc: '단축' },
      { label: '동시접속', value: '5,000+', desc: '처리' },
      { label: '장애 대응시간', value: '70%', desc: '단축' },
    ],
    coreStrengths: [
      '레거시 현대화 & 60% 성능 향상',
      'Zero-Downtime 클라우드 마이그레이션',
      'Spring Batch 대용량 데이터 처리',
      '실시간 모니터링 & 알림 시스템 구축',
    ],
    experience: [
      {
        company: '위즈컨',
        period: '2023.02 - 2025.12',
        position: '백엔드 개발자 | 플랫폼사업본부',
        projects: [
          // 진행중 프로젝트 (시작일 최신순)
          {
            name: '셀바이오틱스 - 헬스케어 커머스 플랫폼',
            headline: '시스템 안정성 향상 및 배송 프로세스 자동화',
            period: '2024.07 - 2025.12',
            role: 'Backend, Front Developer',
            achievements: [
              '코드 리팩토링 및 테스트 강화로 운영 장애 90% 감소',
              'ERP 시스템 연동으로 배송 프로세스 자동화',
              '회원 대상 포인트/문자/이메일 Excel 일괄 업로드 기능 개발로 관리자 업무 시간 40% 단축',
            ],
            techStack: ['Java', 'Spring Framework', 'Spring Boot', 'MariaDB', 'MySQL', 'CJ택배 API', 'ERP Integration', 'Git', 'SVN'],
            impacts: ['장애 90% 감소', '업무 시간 40% 단축'],
            url: 'https://www.duolac.co.kr',
          },
          {
            name: '인천창업플랫폼 - 신규개발',
            headline: '스타트업 지원 시스템 구축: 심사 시간 60% 단축',
            period: '2024.07 - 2025.12',
            role: 'Full-Stack Developer',
            achievements: [
              '지원사업 심사 워크플로우 자동화로 처리 시간 60% 단축',
              '사업자등록번호 기반 중복 체크 시스템 구현',
              '공공데이터 API 연동을 통한 실시간 기업정보 검증',
              '심사현황 대시보드 및 지원자 일괄 승인/반려 기능 구현',
            ],
            techStack: ['Java 8', '전자정부프레임워크 3.10', 'MariaDB', '공공데이터포털 API', 'Bootstrap 4', 'SVN', 'Maven'],
            impacts: ['처리시간 60% 단축', '중복방지 100%', '업무효율 40% 향상'],
            url: 'https://www.incheon-startup.kr/main',
          },
          {
            name: '인천창업플랫폼 - 유지보수 및 고도화',
            headline: '레거시 플랫폼 현대화: 응답속도 60% 개선 & 운영 효율 극대화',
            period: '2023.07 - 2025.12',
            role: 'Full-Stack Developer (프로젝트 리더)',
            achievements: [
              '응답속도 60% 개선으로 일일 이탈 200건 → 50건 감소',
              '개발 생산성 40% 향상으로 분기 릴리스 3회 → 5회 증가',
              '장애 대응 시간 70% 단축: 실시간 모니터링 및 알림 시스템 구축 (Slack)',
              'OpenAI API 연동 AI 멘토링 시스템: 창업 아이디어 분석 및 피드백 자동화',
            ],
            techStack: ['Java 8', '전자정부프레임워크 3.10', 'MariaDB', 'JSP', 'JavaScript', 'Git', 'SVN', 'Maven'],
            impacts: ['응답속도 60% 개선', '생산성 40% 향상', '장애대응 70% 단축'],
            url: 'https://www.incheon-startup.kr/main',
          },
          {
            name: '스포츠안전재단 - 기능개발 및 유지보수',
            headline: '교육관리시스템 고도화: 동시접속 5,000명 처리',
            period: '2023.04 - 2025.04',
            role: 'Backend Developer',
            achievements: [
              '개인화된 학습 진도 관리 및 알림 시스템 구축',
              '배치를 활용한 교육생 전달 메시지 전송 시스템 구축',
              'KISA 보안 가이드 기반 월별 취약점 점검 및 XSS/SQL Injection 대응',
              '동시접속 5,000명 처리를 위한 세션 관리 및 DB 커넥션 풀 최적화',
            ],
            techStack: ['Java 11', 'Spring', 'MariaDB', 'Scouter Monitoring', 'JSP', 'JavaScript', 'SVN', 'Maven', 'Git'],
            impacts: ['수료율 85%', '메모리 25% 절감', '처리시간 20분 → 2~5분 단축'],
            url: 'https://www.sportsafety.or.kr/front/main.do',
          },
          {
            name: 'Gadget - 기업용 서비스 매칭 플랫폼',
            headline: 'B2B 서비스 중개 플랫폼 개발 및 운영',
            period: '2023.02 - 2025.12',
            role: 'Backend Developer (리드)',
            achievements: [
              'B2B 서비스 매칭 로직 설계',
              'Android 하이브리드 앱 개발 (WebView)',
              'Spring Security 기반 역할별(업체/관리자/사용자) 권한 관리 시스템 구현',
              'AWS EC2 + PostgreSQL 인프라 구축 및 무중단 배포 환경 구성',
            ],
            techStack: ['Java 11', 'Spring Framework 4.3', 'Spring Security', 'MyBatis', 'PostgreSQL', 'Kotlin', 'Android SDK 33', 'AWS EC2'],
            impacts: ['B2B 플랫폼 안정적 운영', '사용자 참여율 향상'],
          },
          // 완료 프로젝트 (종료일 최신순)
          
          {
            name: 'GNI - 대량 메시지 발송 플랫폼',
            headline: '알림톡/SMS/이메일 통합 발송 시스템: 일 최대 100만건 처리',
            period: '2025.03 - 2025.05',
            role: 'Backend Developer (리드)',
            achievements: [
              '일 100만건 메시지 처리를 위한 비동기 REST API 서버 설계',
              'Spring Batch + Quartz Scheduler로 6개 자동화 배치 작업 구현',
              'MariaDB RANGE 파티셔닝으로 쿼리 성능 70% 향상',
              'Spring Retry + Exponential BackOff로 외부 API 안정성 99.9% 확보',
              'Vue.js 3 + PrimeVue 기반 관리자 UI 개발 (35개 컴포넌트)',
            ],
            techStack: ['Java 21', 'Spring Boot 3.2', 'Spring Batch 5.1', 'Quartz', 'MariaDB', 'Vue.js 3', 'PrimeVue', 'WebSocket', 'Prometheus'],
            impacts: ['일 100만건 처리', '성공률 99.9%', '쿼리 70% 향상'],
          },
          {
            name: '스포츠안전재단 - 서버 마이그레이션',
            headline: '무중단 마이그레이션 및 인프라 현대화',
            period: '2024.09 - 2024.11',
            role: 'Backend Developer',
            achievements: [
              '물리 서버에서 가비아 클라우드로 서비스 무중단 이전',
              '무중단 배포 시스템 구축',
              '서버 상태 모니터링 및 장애 시 자동 알림 시스템 구현',
            ],
            techStack: ['Java 11', 'Spring Boot', 'MariaDB', 'Redis', 'Blue-Green Deployment'],
            impacts: ['무중단 마이그레이션', '대시보드 활용도 90%'],
            url: 'https://www.sportsafety.or.kr/front/main.do',
          },
          {
            name: '삼천리자전거 - B2B/B2C 통합 커머스',
            headline: '클라우드 마이그레이션 및 결제 시스템 통합',
            period: '2023.08 - 2024.02',
            role: 'Full-Stack Developer',
            achievements: [
              '브랜드별 상품 페이지 관리 시스템 구축',
              '상품 조회, 장바구니, 주문/결제 핵심 API 개발',
              '재고 관리 시스템과 ERP 연동',
              '결제 시스템 통합 (KG이니시스, 네이버페이, 카카오페이)',
            ],
            techStack: ['Java 8', 'PHP', 'Spring', 'MyBatis', 'MySQL', 'Vue.js', 'Tailwind CSS', 'AWS EC2/RDS', 'KG이니시스', '네이버페이', '카카오페이', 'Scouter', 'Jenkins'],
            impacts: ['재고 정확도 98%', '운영비 30% 절감', '페이지 속도 50% 개선'],
            url: 'https://www.samchuly.co.kr/index.php',
          },
          {
            name: '로시안 - 화장품 커머스 플랫폼',
            headline: '상품 페이지 리뉴얼로 로딩 속도 50% 개선 및 콘텐츠 CMS 구축',
            period: '2023.08 - 2024.02',
            role: 'Backend Developer (메인 개발자)',
            achievements: [
              '카테고리 필터링 시스템 리뉴얼로 상품 페이지 로딩 속도 50% 개선',
              '뷰티 콘텐츠 관리 시스템(CMS) 개발로 콘텐츠 업데이트 소요 시간 80% 단축',
            ],
            techStack: ['PHP', 'RESTful API', 'MySQL', 'Vue.js', 'Git'],
            impacts: ['로딩 속도 50% 개선', 'CMS 업데이트 80% 단축'],
          },
          {
            name: '굿네이버스 - CRM & 후원 시스템',
            headline: '사용자 : 결제 안정성 향상 및 모듈화 | 관리자 : RBAC 시스템 구현 및 성능 최적화',
            period: '2023.02 - 2024.05',
            role: 'Full-Stack Developer',
            achievements: [
              '계좌실명조회 API 프로세스 신규 생성',
              '후원 결제 프로세스 리뉴얼 및 안정화',
              'Nexacro 공통 UI 컴포넌트 모듈화로 개발 시간 20% 단축',
              '조직 구조 변경에 따른 권한 관리 시스템 재설계 (RBAC)',
              '데이터베이스 인덱스 최적화 및 쿼리 튜닝으로 조회 성능 50% 개선',
            ],
            techStack: ['Java 1.8', 'Oracle', 'Spring', 'Nexacro', 'Tomcat', 'GitHub', 'Jenkins'],
            impacts: ['개발시간 20% 단축', 'RBAC 권한체계 구축', '메모리 25% 절감', '조회 성능 50% 개선'],
            url: 'https://www.goodneighbors.kr/',
          },
        ],
      },
    ],
    education: [
      {
        school: '한국소프트웨어인재개발원(KOSMO)',
        period: '2022.09 - 2023.02',
        status: '수료',
        major: '개발자양성과정',
        description: 'Java, Spring, 안드로이드, JSP, Database, Git',
      },
      {
        school: '중부대학교',
        period: '2006.02 - 2007.02',
        status: '중퇴',
        major: '애완동물자원학과',
      },
      {
        school: '공항고등학교',
        period: '2003.02 - 2006.02',
        status: '졸업',
        major: '이과',
      },
    ],
    skills: {
      'Backend': ['Java (8/11/17)', 'PHP', 'Spring Boot/Framework', 'Spring Batch', 'JPA/Hibernate', 'MyBatis', 'RESTful API'],
      'Database': ['PostgreSQL', 'MySQL', 'MariaDB', 'MongoDB'],
      'Frontend': ['Vue.js', 'React', 'TypeScript', 'JavaScript ES6+', 'Tailwind CSS', 'Bootstrap'],
      'DevOps': ['Docker', 'AWS (EC2,  S3)', 'Jenkins', 'GitHub'],
    },
    philosophy: '측정 가능한 비즈니스 가치를 창출하는 확장 가능한 시스템 구축',
  };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">
      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 10mm 15mm;
            size: A4;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            font-size: 12px !important;
          }

          /* 배경색 강제 출력 */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* 섹션 카드 border/shadow/rounded 제거, 여백 최소화 */
          .print-section {
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 16px 0 !important;
            margin-bottom: 8px !important;
            page-break-before: auto;
          }

          /* 프로젝트 카드 페이지 잘림 방지 */
          .project-card {
            page-break-inside: avoid;
          }

          /* 메인 컨테이너 전체 너비 */
          main {
            width: 100% !important;
            max-width: 100% !important;
          }

          /* ROI 하이라이트 4열 강제 */
          .print-highlights-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
          }

          /* 프로필 영역: 가로 배치 강제 */
          .print-profile-layout {
            display: flex !important;
            flex-direction: row !important;
            gap: 24px !important;
          }

          /* 프로필 사진 크기 고정 */
          .print-profile-photo {
            width: 120px !important;
            height: 148px !important;
            flex-shrink: 0 !important;
          }

          /* 프로젝트 간 간격 축소 */
          .print-projects-list > * + * {
            margin-top: 16px !important;
          }

          /* 프로젝트 카드 내부 패딩 축소 */
          .project-card {
            padding-bottom: 12px !important;
          }

          /* 학력/스킬 섹션 내부 간격 */
          .print-section h2 {
            font-size: 16px !important;
          }
        }
      `}</style>

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-20 print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-light text-gray-900 tracking-tight">
            TechLog
          </Link>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            이력서 PDF
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 flex gap-8 print:block print:max-w-none print:px-0 print:py-0 print:mx-0">
        {/* Left Sidebar Navigation */}
        <aside className="hidden lg:block w-40 flex-shrink-0 print:hidden">
          <nav className="sticky top-24">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                      activeSection === item.id
                        ? 'text-gray-900 border-l border-gray-900'
                        : 'text-gray-400 hover:text-gray-600 border-l border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-w-0 print:w-full">
          {/* Profile Section */}
          <section id="profile" className="print-section bg-white border border-gray-100 rounded-lg p-8 mb-6">
            <div className="print-profile-layout flex flex-col md:flex-row gap-8">
              {/* Profile Photo */}
              <div className="flex-shrink-0 flex justify-center md:justify-start">
                <div className="print-profile-photo w-36 h-44 rounded overflow-hidden">
                  <img
                    src="/files/profile.jpg"
                    alt={resumeData.name}
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-light text-gray-900 tracking-tight">{resumeData.name}</h1>
                <p className="text-sm text-gray-500 mt-1">{resumeData.title}</p>
                <div className="w-16 h-px bg-gray-300 my-4" />

                {/* Contact */}
                <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-6">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {resumeData.email}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {resumeData.phone}
                  </span>
                  <a href={`https://${resumeData.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-700">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    {resumeData.website}
                  </a>
                  <a href={`https://${resumeData.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gray-700">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {resumeData.github}
                  </a>
                  {/*
                  <span className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {resumeData.location}
                  </span>
                */}
                </div>

                {/* Key Highlights - ROI */}
                <div className="mb-6">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">ROI 창출 실적</p>
                  <div className="print-highlights-grid grid grid-cols-2 md:grid-cols-4 gap-3">
                    {resumeData.highlights.map((item, idx) => (
                      <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                        <p className="text-2xl font-semibold text-gray-900">{item.value}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{item.label} {item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Strengths */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">핵심 전문성</p>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.coreStrengths.map((strength, idx) => (
                      <span key={idx} className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="print-section bg-white border border-gray-100 rounded-lg p-8 mb-6">
            <div className="flex items-baseline gap-3 mb-6">
              <h2 className="text-xl font-light text-gray-900">경력</h2>
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">2년 10개월</span>
            </div>

            {resumeData.experience.map((exp, idx) => (
              <div key={idx}>
                {/* 소속 회사 정보 */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <span className="text-xs text-gray-400 uppercase tracking-wider">소속</span>
                  <span className="text-sm font-medium text-gray-700">{exp.company}</span>
                  <span className="text-xs text-gray-400">{exp.period}</span>
                  <span className="text-xs text-gray-400">·</span>
                  <span className="text-xs text-gray-400">{exp.position}</span>
                </div>

                {/* 프로젝트 목록 - 각각 독립적인 경험처럼 표시 */}
                <div className="print-projects-list space-y-8">
                  {exp.projects.map((project, pIdx) => (
                    <div key={pIdx} className="project-card relative pl-6 pb-6 border-l-2 border-gray-100 last:pb-0">
                      {/* 타임라인 dot */}
                      <div className="absolute left-[-5px] top-0 w-2 h-2 bg-gray-300 rounded-full" />

                      {/* 프로젝트 헤더 */}
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-semibold text-gray-900">{project.name}</h4>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-500 hover:text-blue-700 transition-colors print:hidden"
                            >
                              Link
                            </a>
                          )}
                        </div>
                        <div className="text-right flex-shrink-0 ml-4">
                          <p className="text-xs text-gray-400">{project.period}</p>
                          <span className="text-xs text-gray-500">{project.role}</span>
                        </div>
                      </div>

                      {/* Headline - 임팩트 요약 */}
                      <p className="text-sm font-medium text-gray-700 mb-3">{project.headline}</p>

                      {/* 성과 목록 */}
                      <ul className="space-y-1 mb-3">
                        {project.achievements.map((achievement, aIdx) => (
                          <li key={aIdx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Business Impacts + Tech Stack inline */}
                      <div className="flex flex-wrap items-center gap-2">
                        {project.impacts.map((impact, iIdx) => (
                          <span key={iIdx} className="px-2 py-0.5 text-xs font-medium bg-green-50 text-green-700 rounded">
                            {impact}
                          </span>
                        ))}
                        <span className="text-gray-300">|</span>
                        <span className="text-xs text-gray-400">{project.techStack.join(' · ')}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section id="education" className="print-section bg-white border border-gray-100 rounded-lg p-8 mb-6">
            <div className="flex items-baseline gap-3 mb-8">
              <h2 className="text-xl font-light text-gray-900">학력</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="space-y-6">
              {resumeData.education.map((edu, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800">{edu.school}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {edu.period} · {edu.status} · {edu.major}
                    </p>
                    {edu.description && (
                      <p className="text-xs text-gray-500 mt-1">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="print-section bg-white border border-gray-100 rounded-lg p-8">
            <div className="flex items-baseline gap-3 mb-8">
              <h2 className="text-xl font-light text-gray-900">스킬</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="space-y-5">
              {Object.entries(resumeData.skills).map(([category, skills]) => (
                <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider w-20 flex-shrink-0 pt-1">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 border border-gray-200 text-gray-600 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Introduction Section */}
          <section id="introduction" className="print-section print:hidden bg-white border border-gray-100 rounded-lg p-8 mt-6">
            <div className="flex items-baseline gap-3 mb-8">
              <h2 className="text-xl font-light text-gray-900">자기소개서</h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            <div className="space-y-8">
              {/* 1. 한 줄 요약 */}
              <div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Java/Spring 기반으로 서비스를 &quot;개발 → 배포 → 운영 → 개선&quot;까지 끝까지 책임지며, 성능/비용/안정성을 지표로 개선해 온 백엔드 개발자 김성우입니다.
                </p>
              </div>

              {/* 2. 해결해온 문제의 유형 */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">제가 해결해온 문제의 유형</h3>
                <p className="text-sm text-gray-600 mb-3">제가 주로 맡아 성과를 냈던 문제는 아래 4가지입니다.</p>
                <div className="space-y-3">
                  <div className="pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-medium text-gray-800">1. 배포/운영 안정성</p>
                    <p className="text-sm text-gray-600 mt-1">장애 징후를 빨리 발견하고(모니터링/알림), 원인을 좁히며(로그/APM), 재발을 줄이는(개선/표준화) 체계 구축</p>
                  </div>
                  <div className="pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-medium text-gray-800">2. 성능 병목</p>
                    <p className="text-sm text-gray-600 mt-1">실행계획/인덱스/쿼리 구조를 기반으로 병목을 찾고, API 체감 성능을 개선</p>
                  </div>
                  <div className="pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-medium text-gray-800">3. 마이그레이션/전환 리스크</p>
                    <p className="text-sm text-gray-600 mt-1">인프라 이전 또는 DB 전환 등 &quot;깨지기 쉬운 작업&quot;에서 중단 시간 최소화와 안정적인 전환 절차 설계</p>
                  </div>
                  <div className="pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-medium text-gray-800">4. 반복 업무 자동화</p>
                    <p className="text-sm text-gray-600 mt-1">운영·관리 영역의 반복 작업을 도구화/자동화하여 팀 효율을 개선</p>
                  </div>
                </div>
              </div>

              {/* 3. 기술적으로 어떻게 일하는가 */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">기술적으로 &quot;어떻게&quot; 일하는가</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">운영 가능한 코드/시스템을 우선합니다</p>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>기능 구현 후에 운영을 고민하는 것이 아니라, 처음부터 장애·모니터링·배포를 포함한 완성 형태를 목표로 합니다.</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>&quot;잘 돌아가는 기능&quot;이 아니라 &quot;장애가 나도 빠르게 복구 가능한 기능&quot;을 기준으로 설계합니다.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">성능 개선은 감이 아니라 근거로 합니다</p>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>쿼리 튜닝은 &quot;느낌&quot;이 아니라 실행계획/지표(P95, TPS, DB CPU/IO 등) 중심으로 접근합니다.</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>개선 전후를 측정하고, 회귀(다시 느려지는 현상)가 일어나지 않게 가드레일(인덱스 정책/리뷰/테스트)을 둡니다.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">배포 자동화는 팀 생산성의 핵심이라고 믿습니다</p>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>CI/CD는 Jenkins 기반으로 빌드/배포 자동화 흐름을 구축하고, 배포 과정에서 발생하는 휴먼에러를 줄여 왔습니다.</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>배포 안정성을 위해 헬스체크, 로그 확인 포인트, 롤백 시나리오를 배포 절차에 포함시키는 방식으로 운영했습니다.</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 mb-1">AWS 인프라 구축 및 운영 경험</p>
                    <ul className="space-y-1">
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>AWS EC2 + PostgreSQL 기반 B2B 플랫폼 인프라 구축 및 무중단 배포 환경 구성 (Gadget 프로젝트)</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>AWS EC2/RDS 환경에서 커머스 서비스 운영, 운영비 30% 절감 달성 (삼천리자전거)</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>물리 서버 → 가비아 클라우드 무중단 마이그레이션 및 헬스체크/자동 알림 시스템 구현 (스포츠안전재단)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. 기여할 수 있는 방식 */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">제가 기여할 수 있는 방식</h3>
                <p className="text-sm text-gray-600 mb-3">단순 CRUD를 넘어, 현장 데이터/운영/인프라가 함께 굴러가는 백엔드 환경에서 저는 아래 3가지 축으로 기여할 수 있습니다.</p>
                <div className="space-y-3">
                  <div className="pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-medium text-gray-800">&quot;안정적으로 굴러가는 서버&quot;를 만드는 표준화</p>
                    <ul className="space-y-1 mt-1">
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>배포/장애 대응/관측(모니터링) 기준을 정리하고 팀의 운영 루틴으로 만드는 역할</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>장애가 났을 때 개인 역량에 의존하는 것이 아니라, 프로세스와 도구로 복구 속도를 끌어올리는 구조를 만드는 역할</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-medium text-gray-800">배치/통계성 작업의 신뢰성 강화</p>
                    <ul className="space-y-1 mt-1">
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>스케줄링, 재처리(리트라이), 멱등성, 실패 알림 등 배치 운영에서 자주 터지는 문제를 선제적으로 막는 방식</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>데이터가 쌓일수록 시스템이 느려지는 것이 아니라 예측 가능하게 확장되도록 만드는 방향</span>
                      </li>
                    </ul>
                  </div>
                  <div className="pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-medium text-gray-800">DB/성능의 지속적 개선 문화</p>
                    <ul className="space-y-1 mt-1">
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>&quot;느려지면 그때 고치는&quot; 방식이 아니라, 지표를 기준으로 선제적으로 병목을 제거하는 방향</span>
                      </li>
                      <li className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span>기능 출시 속도를 떨어뜨리지 않으면서도 성능을 지키는 개발 프로세스(리뷰 기준, 체크리스트 등) 정착</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 6. 일할 때의 기준 */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">제가 일할 때의 기준 (협업/커뮤니케이션)</h3>
                <ul className="space-y-1.5">
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    <span>&quot;잘 만든 코드&quot;보다 &quot;팀이 유지보수 가능한 코드&quot;를 더 중요하게 생각합니다.</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    <span>요구사항이 바뀌는 상황에서도 흔들리지 않도록, 핵심 도메인/데이터 모델/운영 시나리오를 먼저 정리하고 개발합니다.</span>
                  </li>
                  <li className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-gray-400 mt-0.5">•</span>
                    <span>장애나 이슈가 발생했을 때 책임을 회피하지 않고, 원인/재발 방지/공유 문서화까지 마무리하는 스타일입니다.</span>
                  </li>
                </ul>
              </div>

              {/* 마무리 */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-700 leading-relaxed">
                  저는 기능 개발에 그치지 않고, 서비스가 안정적으로 배포되고 운영되는 상태까지 책임지는 백엔드 개발자입니다. 운영 중심의 백엔드 역량을 바탕으로, 시스템이 커질수록 더 강해지는 구조(관측/배포/성능/배치 안정성)를 만들고 싶습니다.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          &copy; 2026 TechLog {/* {resumeData.name} */} All rights reserved.
        </div>
      </footer>
    </div>
  );
}
