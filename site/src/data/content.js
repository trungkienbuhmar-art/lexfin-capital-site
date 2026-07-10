// ============================================================
// LexFin Capital — content model (Vietnamese, source of truth)
// ============================================================

export const contact = {
  phone: '+84 977 290 770',
  phoneHref: 'tel:+84977290770',
  email: 'trungkien.lexfin@gmail.com',
  emailHref: 'mailto:trungkien.lexfin@gmail.com',
  city: 'TP. Hồ Chí Minh',
  facebook: 'https://www.facebook.com/',
  webhook: 'https://lexfincapital.app.n8n.cloud/webhook/lexfin-contact',
};

export const navLinks = [
  { label: 'Dịch Vụ', href: '#services' },
  { label: 'Trạng Thái Pháp Lý', href: '#status' },
  { label: 'Về Chúng Tôi', href: '#founder' },
  { label: 'LFC Insights', href: '#insights' },
];

export const tickerItems = [
  'Quy hoạch 1/500', 'DSCR · LTV · DTI', 'Cấu trúc vốn vay', 'GCN · GPMB · GPXD',
  'WACC · CAPM · DCF', 'Thẩm định 24h', 'AI-First Platform', 'Term Sheet · CIC',
  'Altman Z-Score', 'Mr. Finance',
];

export const services = [
  {
    id: 'svc-1', no: '01', kicker: 'Pháp Lý',
    title: 'Pháp Lý BĐS · Doanh Nghiệp',
    img: '/assets/svc-phap-ly-dn.webp',
    desc: 'Thẩm định chuyên sâu và hỗ trợ chuẩn bị toàn bộ hồ sơ pháp lý dự án — từ chủ trương đầu tư, quy hoạch 1/500, GPMB đến GPXD. Chuẩn hóa hồ sơ dự án sẵn sàng cho huy động vốn ngân hàng.',
    tags: ['Thẩm định dự án', 'Chủ trương đầu tư', 'Quy hoạch 1/500', 'GPMB', 'HSTK NCKT', 'GPXD'],
    cta: 'Nộp hồ sơ thẩm định',
    modal: {
      items: ['Xin chủ trương đầu tư', 'Thẩm định quy hoạch 1/500', 'Kiểm tra pháp lý dự án', 'Xử lý GPMB', 'Xin GPXD', 'Chuẩn hóa hồ sơ pháp lý cho ngân hàng'],
      steps: ['Tiếp nhận & chẩn đoán hồ sơ', 'Thẩm định pháp lý toàn diện', 'Gỡ vướng & chuẩn hóa', 'Bàn giao hồ sơ sạch'],
      time: '7–21 ngày làm việc tùy phức tạp',
    },
  },
  {
    id: 'svc-2', no: '02', kicker: 'Pháp Lý',
    title: 'Pháp Lý BĐS · Cá Nhân',
    img: '/assets/svc-phap-ly-cn.webp',
    desc: 'Hỗ trợ nộp và xử lý pháp lý BĐS cá nhân — tháo gỡ vướng mắc của sổ đỏ, cập nhật GCN lên thông tin quy hoạch, hoàn công nhà lên sổ,...',
    tags: ['GCN', 'GCNQSDĐ', 'Hợp đồng mua bán', 'Tranh chấp'],
    cta: 'Gỡ vướng pháp lý',
    modal: {
      items: ['Kiểm tra GCN / GCNQSDĐ', 'Tháo gỡ thông tin quy hoạch', 'Xử lý tranh chấp BĐS', 'Cấp sổ mới lần đầu'],
      steps: ['Kiểm tra tính pháp lý tài sản', 'Tư vấn rủi ro & phương án', 'Soạn thảo hợp đồng', 'Hỗ trợ ký kết & công chứng'],
      time: '3–10 ngày làm việc tùy hạng mục',
    },
  },
  {
    id: 'svc-3', no: '03', kicker: 'Tài Chính',
    title: 'Tài Chính · Doanh Nghiệp',
    img: '/assets/svc-tai-chinh-dn.webp',
    desc: 'Tư vấn và định hướng cấu trúc vốn tối ưu cho doanh nghiệp — phân tích chuyên sâu các chỉ số tài chính doanh nghiệp và dự án, xây dựng hạn mức tín dụng và cấu trúc vốn dự án với ngân hàng.',
    tags: ['Phân tích chỉ số', 'Cấu trúc tài chính', 'Sức khỏe doanh nghiệp', 'Tư vấn cấu trúc chuyên sâu'],
    cta: 'Gửi hồ sơ chi tiết',
    modal: {
      items: ['Phân tích DSCR / LTV / DTI', 'Cấu trúc gói vay', 'Xây dựng hạn mức tín dụng', 'Tư vấn WACC & cơ cấu vốn', 'Chuẩn bị hồ sơ vay'],
      steps: ['Chẩn đoán năng lực tài chính', 'Thiết kế phương án vay', 'Chuẩn bị hồ sơ ngân hàng', 'Đàm phán & giải ngân'],
      time: '10–30 ngày tùy quy mô khoản vay',
    },
  },
  {
    id: 'svc-4', no: '04', kicker: 'Tài Chính',
    title: 'Tài Chính · Cá Nhân',
    img: '/assets/svc-tai-chinh-cn.webp',
    desc: 'Tư vấn tài chính cá nhân — tư vấn xây dựng nền tảng hình ảnh cá nhân tài chính tốt, bền vững, đầu tư đa kênh thông minh, hỗ trợ đàm phán hạn mức ngân hàng,...',
    tags: ['Thẩm định chuyên sâu tài chính cá nhân', 'Xây dựng lộ trình tài chính bền vững', 'Đầu tư thông minh', 'Xây dựng hạn mức ngân hàng'],
    cta: 'Tư vấn tài chính',
    modal: {
      items: ['Thẩm định tài chính cá nhân', 'Lộ trình tài chính bền vững', 'Đầu tư thông minh', 'Xây dựng hạn mức ngân hàng'],
      steps: ['Chẩn đoán hồ sơ tài chính cá nhân', 'Thiết kế lộ trình & phương án', 'Chuẩn hóa hồ sơ ngân hàng', 'Đàm phán hạn mức & triển khai'],
      time: '5–15 ngày tùy hồ sơ',
    },
  },
];

export const banks = [
  'Vietcombank', 'BIDV', 'VietinBank', 'Agribank', 'MB Bank', 'VPBank', 'Techcombank',
];

export const metrics = [
  { t: 200, suffix: '+', label: 'Hồ Sơ Xử Lý' },
  { t: 10, suffix: '+', label: 'Năm Kinh Nghiệm' },
  { t: 95, suffix: '%', label: 'Tỷ Lệ Thành Công' },
  { t: 24, suffix: 'h', label: 'Thẩm Định Ban Đầu' },
];

export const statusTiers = [
  {
    tier: 'GREEN', color: 'green', head: 'Pháp lý sạch',
    body: 'Đủ 1/500 + GPXD, nghĩa vụ tài chính hoàn thành. Hồ sơ sẵn sàng đứng trước hội đồng tín dụng.',
    verdict: 'GO — chuẩn bị huy động vốn',
  },
  {
    tier: 'YELLOW', color: 'yellow', head: 'Vướng nhẹ',
    body: 'Thiếu 1–2 thủ tục, xử lý được trong 3–6 tháng với lộ trình gỡ rối đúng trình tự.',
    verdict: 'CONDITIONAL GO — lập lộ trình',
  },
  {
    tier: 'RED', color: 'red', head: 'Vướng nặng',
    body: 'Sai quy hoạch cấp trên, tranh chấp đất, chưa GPMB. Bơm vốn lúc này là rủi ro không kiểm soát được.',
    verdict: 'STOP — tái cấu trúc hoặc thoái vốn',
  },
];

export const credentials = [
  { marker: '10+', title: 'Năm Thực Chiến', desc: 'Trực tiếp xử lý hàng trăm deal pháp lý và tài chính tại Việt Nam. Không lý thuyết — chỉ kết quả đo được.' },
  { marker: 'AI', title: 'Hệ Thống Thẩm Định AI', desc: 'Hệ thống AI riêng của LexFin — phân tích hồ sơ đa chiều, phát hiện rủi ro vượt khả năng thủ công.' },
  { marker: '2→1', title: 'Mô Hình Song Song', desc: 'Pháp lý và tài chính xử lý đồng thời — rút ngắn timeline deal từ tháng xuống tuần.' },
];

export const whyReasons = [
  { icon: 'ai', title: 'AI-First Platform', desc: 'Hệ thống Multi AI System mạnh mẽ độc bản phân tích hồ sơ trong 24h, đưa ra các đánh giá và báo cáo tình hình thực trạng và tư vấn chuyên sâu trong thời gian rất ngắn.' },
  { icon: 'parallel', title: 'Xử Lý Song Song', desc: 'Pháp lý và Tài chính chạy phân tích chuyên sâu đồng thời cùng một thời điểm, không chờ tuần tự. Timeline đưa ra chiến lược và quy trình xử lý deal rút ngắn từ tháng xuống tuần.' },
  { icon: 'result', title: 'Kết Quả Thực Tế', desc: '200+ hồ sơ đã xử lý. 95% tỷ lệ được duyệt và đạt mức độ hài lòng từ đối tác và khách hàng. Mọi quy trình đều được thể hiện bằng kết quả đạt được.' },
];

export const processSteps = [
  { no: '01', tag: '24h → Báo cáo chẩn đoán', title: 'Tiếp Nhận & Chẩn Đoán', desc: 'AI phân tích toàn bộ hồ sơ trong 24h — xác định chính xác điểm vướng mắc pháp lý và khoảng trống tài chính. Không phỏng đoán, chỉ dữ liệu.' },
  { no: '02', tag: 'Pháp lý + Tài chính đồng thời', title: 'Cấu Trúc Song Song', desc: 'Xử lý đồng thời pháp lý và tài chính — không chờ tuần tự. Mỗi ngày rút ngắn là một rủi ro cơ hội được loại bỏ.' },
  { no: '03', tag: 'LFC Report + Deal Closed', title: 'Thực Thi & Bàn Giao', desc: 'Làm việc trực tiếp với ngân hàng và cơ quan pháp lý. Bàn giao LFC Report đầy đủ, minh bạch — từng bước, từng số liệu.' },
];

export const needOptions = [
  'Pháp lý BĐS Doanh nghiệp',
  'Pháp lý BĐS Cá nhân',
  'Tài chính Doanh nghiệp',
  'Tài chính Cá nhân',
];
