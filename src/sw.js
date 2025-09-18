import { precacheAndRoute } from 'workbox-precaching';


// Vite가 빌드 시, 여기에 정적 파일 경로를 삽입하는 처리
precacheAndRoute(self.__WB_MANIFEST);

// 이하 이벤트 처리
self.addEventListener('install', (e) => {
  console.log(`서비스 워커 설치됨`, e);
});



self.addEventListener('activate', (e) => {
  console.log(`[서비스 워커] 활성화됨`, e);
});



self.addEventListener('fetch', (e) => {
  console.log(`[서비스 워커] 리소스 패치됨`, e);
});