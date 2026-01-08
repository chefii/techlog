'use client';

import Link from 'next/link';

export default function ResumePage() {
  const resumeData = {
    name: '김성우',
    email: 'bottlek3595@gmail.com',
    phone: '+821066831291',
    summary: `
    
    3년차 백엔드 개발자(Java/Spring) 로 SI/SM와 서비스 환경에서 백엔드 플랫폼 개발·운영 인프라 구축을 수행했습니다.
    무중단 클라우드 마이그레이션으로 운영비 30% 절감, 쿼리 튜닝으로 성능 70% 개선, APM 기반 모니터링/장애 대응 체계 구축 등 정량 성과 중심으로 문제를 해결해 왔습니다.
    B2B/B2C, 공공, 안전교육 등 12개 프로젝트 경험을 바탕으로 ROI 관점의 기술 의사결정과 팀 커뮤니케이션에 강점이 있습니다.
    
    
    3년차 서버 백엔드 개발자 | Java/Spring · AWS/NCP · DevOps
무중단 마이그레이션으로 운영비 30% 절감, 쿼리 튜닝으로 성능 70% 개선, APM 연동으로 실시간 모니터링/장애 대응 체계를 구축했습니다.
SI/SM와 서비스 환경에서 B2B/B2C·공공·안전교육 등 12개 프로젝트를 수행하며 비즈니스 임팩트가 측정되는 개선을 만들어 왔습니다.


무중단 클라우드 마이그레이션으로 운영비 30% 절감, 쿼리 튜닝으로 성능 70% 개선을 만든 **3년차 백엔드 개발자(Java/Spring)**입니다.
AWS/NCP 기반의 운영·배포·모니터링(APM) 경험을 갖추고, SI/SM와 서비스 환경에서 플랫폼 개발부터 운영 안정화까지 책임져 왔습니다.
ROI 중심의 기술 의사결정과 팀 커뮤니케이션을 바탕으로 12개 프로젝트에서 정량 성과를 창출했습니다.




    배움에 두려움이 없고 팀원들과의 소통으로 함께 성장을 갈망하는 소프트웨어 엔지니어입니다.
SI/SM 그리고 서비스 기업의 엔지니어로 활동 했습니다.

Java & Spring / NodeJS / AWS & NCP 기반의 DevOps 경험을 보유한 3년차 서버 백엔드 개발자입니다.
Zero-Downtime 클라우드 마이그레이션으로 운영비용 30% 절감, 쿼리 튜닝을 통한 성능 70% 개선
APM 연동을 통한 실시간 모니터링 및 장애 처리 등의 검증된 성과를 가지고
백엔드 플랫폼 개발 및 서버운영 인프라 구축 등을 해왔습니다.

단순히 개발만 하는것이 아니라 "코드 한 줄이 만드는 비지니스 임펙트"를 믿는 엔지니어로
측정 가능한 비지니스 가치를 창출해왔고, 모던 기술 스택 전반에 걸친 실무 경험을 보유하고 있습니다.

B2B/B2C 플랫폼, 공공 시스템, 안전교육서비스 등 다양한 도메인에서 12개 프로젝트를 수행했으며,
항상 ROI 관점에서 기술적 의사결정을 내리고 측정 가능한 성과를 창출했습니다.`,
    experience: [
      {
        company: '위즈컨',
        period: '2023.02 - 재직중 (2년 10개월)',
        position: '정규직 | 풀스택개발자(플랫폼사업부) | 대리',
        projects: [
          {
            name: '인천창업플랫폼',
            period: '2024.07 - 2025.10',
            role: '풀스택 개발',
            description: '기능 개발 및 유지보수',
            achievements: [
              '코드 리펙토링 및 데이터베이스 최적화',
              '실시간 모니터링 및 알림 시스템 구축(APM & Slack)',
            ],
            url: 'https://www.incheon-startup.kr/main',
          },
          {
            name: '셀바이오틱스',
            period: '2024.07 - 2025.10',
            role: '백엔드 개발',
            description: '자사몰, 관리자, RPS, ERP시스템 기능 개발 및 유지보수',
            achievements: [
              'SpringFrameWork 기반 지속적 기능 개선 및 버그 수정',
              '주문 시스템 및 CJ택배 API 연동',
              '회원 관리 및 게시판 시스템 개선',
              'Excel 기반 데이터 처리 자동화(관리자 업무 효율성 40% 향상)',
            ],
            url: 'https://www.duolac.co.kr/',
          },
          {
            name: 'Gadget',
            period: '2024.02 - 2024.06',
            role: '백엔드 개발',
            description: '기업용 서비스 매칭 플랫폼 기능 개발',
            achievements: [
              'Android & iOS 하이브리드 앱 개발 (WebView + FCM Push)',
              'Spring Framework 기반 REST API 및 관리자 시스템 구축',
              '회원/권한 관리, 통계 대시보드 시스템 기능 개발',
              'AWS EC2 클라우드 인프라 구축 및 배포',
            ],
            url: 'http://app.higadget.co.kr/',
          },
          {
            name: '스포츠안전재단 (NCP 마이그레이션)',
            period: '2024.09 - 2024.11',
            role: '인프라, 백엔드 개발',
            description: 'NCP 서버 이전 및 DB변경 마이그레이션',
            achievements: [
              '물리서버에서 클라우드 환경으로 마이그레이션',
              '무중단 배포 시스템 구축',
              '헬스체크 시스템 구현',
              'MariaDB -> PostgreSQL 변경',
            ],
            url: 'https://www.sportsafety.or.kr/front/main.do',
          },
          {
            name: '인천창업플랫폼 (고도화)',
            period: '2024.08 - 2024.10',
            role: '풀스택 개발',
            description: '사용자, 관리자페이지 고도화',
            achievements: [
              '총 72개 JSP파일 고도화 개편',
              'ChatGPT 챗봇 추가: AI기반 질의응답 시스템 구축',
              'GoogleAnalytics 도입: GA4 추적 코드 추가',
              '대시보드 강화: ECharts 기반 통계 차트, 기간별 접속 통계',
              'UI 전면 개편',
              'SNS 로그인 기능 구현(Kakao, Naver, Google)',
              '멘토링 매칭 이메일 발송 시스템 (MailSenderUtil)',
            ],
            url: 'https://www.incheon-startup.kr/main',
          },
          {
            name: '로시안 시효_로레알',
            period: '2023.08 - 2024.02',
            role: '백엔드 개발',
            description: '디지털 서비스 유지보수',
            achievements: [
              '화장품 전문 쇼핑몰 리뉴얼',
              '뷰티 콘텐츠 관리 시스템(CMS) 기능 개발',
            ],
          },
          {
            name: '삼천리 자전거',
            period: '2023.08 - 2024.02',
            role: '백엔드 개발',
            description: 'B2B, 브랜드, 자사몰, 관리자 기능 개발 및 유지보수',
            achievements: [
              '브랜드별 상품 페이지(관리자) 관리 페이지 기능 개발',
              '재고 관리 시스템과 ERP 연동',
              '결제 시스템 통합(KG이니시스, 네이버페이, 카카오페이)',
            ],
            url: 'https://www.samchuly.co.kr/index.php',
          },
          {
            name: '인천창업플랫폼 (기능 개발)',
            period: '2023.08 - 2024.05',
            role: '풀스택 개발',
            description: '기능 개발',
            achievements: [
              '공공데이터 API연동을 통한 사업자등록번호 기업정보 검증 시스템 구현',
              '대시보드 개발 및 일괄 처리 기능 구현',
              'AI멘토링 시스템 구축(창업 아이디어 분석 및 피드백 자동화)',
            ],
            url: 'https://www.incheon-startup.kr/main',
          },
          {
            name: '굿네이버스',
            period: '2023.08 - 2024.05',
            role: '백엔드 개발',
            description: '홈페이지 기능 개발 및 유지보수',
            achievements: [
              '계좌 실명 조회 API 프로세스 구현',
              '후원 시스템 리뉴얼 및 결제 모듈 안정화',
              '공통 컴포넌트 모듈화(공통 컴포넌트 모듈화 및 재사용성 향상)',
            ],
            url: 'https://www.goodneighbors.kr/',
          },
          {
            name: '스포츠안전재단',
            period: '2023.04 - 2025.04',
            role: '풀스택 개발',
            description: '스포츠안전재단 내 4개 프로젝트 기능 개발 및 유지보수',
            achievements: [
              'APM(Scouter모니터)으로 메모리 사용량 25% 절약, 불필요한 세션 데이터 정리',
              '학습 진도 관리 및 알림 시스템 구축(수료율 85% 달성)',
              'Spring Batch 활용한 메시지 전송 시스템 구축',
              '월별 취약점 점검 및 보안 조치',
            ],
            url: 'https://www.sportsafety.or.kr/front/main.do',
          },
          {
            name: '굿네이버스 (CRM)',
            period: '2023.02 - 2023.08',
            role: '풀스택 개발',
            description: 'CRM & 그룹웨어 기능개발',
            achievements: [
              '조직 구조 변경에 따른 권한 관리 시스템 재설계(RBAC 시스템 구현)',
              '데이터베이스 인덱스 최적화 및 쿼리 튜닝 (조회 성능 50% 개선)',
            ],
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
        period: '2006.02 - 2027.02',
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
      backend: ['Java', 'Spring', 'Spring MVC', 'Spring Boot', 'Spring Framework', 'MyBatis', 'Restful API'],
      frontend: ['HTML', 'JavaScript', 'Vue.js', 'Bootstrap', 'Nexacro'],
      database: ['MySQL', 'Oracle', 'PostgreSQL', 'NoSQL', 'MongoDB'],
      devops: ['AWS', 'Amazon EC2', 'Jenkins', 'Nginx', 'Tomcat', 'Apache'],
      tools: ['Git', 'GitHub', 'GitLab', 'SVN', 'Gradle', 'Maven', 'IntelliJ IDEA', 'Eclipse', 'Visual Studio'],
      os: ['Linux', 'Red Hat Linux', 'CentOS'],
      other: ['시스템 모니터링', '보안 정책', 'PHP'],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-gray-900">
            TechLog
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="/files/resume.pdf"
              download
              className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              PDF 다운로드
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{resumeData.name}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
            <span>{resumeData.phone}</span>
            <span>{resumeData.email}</span>
          </div>
          <div className="text-gray-700 whitespace-pre-line leading-relaxed">
            {resumeData.summary}
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">
            경력 <span className="text-lg font-normal text-gray-500">2년 10개월</span>
          </h2>

          {resumeData.experience.map((exp, idx) => (
            <div key={idx} className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 font-bold">
                  {exp.company.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-gray-600">{exp.period}</p>
                  <p className="text-gray-500 text-sm">{exp.position}</p>
                </div>
              </div>

              <div className="space-y-6 ml-16">
                {exp.projects.map((project, pIdx) => (
                  <div key={pIdx} className="border-l-2 border-gray-200 pl-4">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{project.name}</h4>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 text-sm hover:underline"
                        >
                          [Link]
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mb-1">
                      {project.period} | {project.role}
                    </p>
                    <p className="text-gray-700 mb-2">{project.description}</p>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {project.achievements.map((achievement, aIdx) => (
                        <li key={aIdx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-xl shadow-sm p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">학력</h2>
          <div className="space-y-4">
            {resumeData.education.map((edu, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-lg">🎓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                  <p className="text-sm text-gray-600">
                    {edu.period} | {edu.status} | {edu.major}
                  </p>
                  {edu.description && (
                    <p className="text-sm text-gray-500">{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b">스킬</h2>
          <div className="space-y-4">
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-sm font-medium text-gray-500 uppercase mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          &copy; 2024 {resumeData.name}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
