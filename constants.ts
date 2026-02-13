import { Clinic, Doctor, Feature, Product } from "./types";

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "TS. BS Elena Vance",
    specialty: "Da Liễu - Thẩm Mỹ",
    experience: 12,
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPTZcrIsdqToz9znpt0aJ08RQLW0jIse-Me_dlVB5cbn15hzeKkROD_YBo5qOLO2frBiOdUWX1Sfk0_3TmVTyCJB-qnIwcLoalIdq858Y6z2C_rzhe3db0WLHYkJe43sjb-Q3wa8XBmS6oJwqDzltmpzPDgm1YjQNbhFRdfcuP5KoUNHVUr3N8vO0ktLx9XqfKbp2ULX5V3uRDxs6Y-kecN2YjhxjrhQIF-slOeHkcJpB2IxO7FWjeNDwB3EXsGoomxgABbyGrxpLa",
    location: "Quận 3, TP. HCM"
  },
  {
    id: 2,
    name: "ThS. BS Julian Thorne",
    specialty: "Phẫu Thuật Tạo Hình",
    experience: 15,
    rating: 5.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6wSh2P6m7dqJI50HGS9yNo2YALI6dBCGAHJyNO7UNntItB2JGtn_rUbws7XuGIvcxNdbC9b5QfNISpDF-60J0YVfxWlwRPzK3m7SSPQMD0IyfZUVZjb9nN7n-SF6uGk-9ZhMWGjP6VYFCsth70s_VDrCA43CyHX_WVoV_uUa4yUldRzaq8NfY4OHGbrDoITE35dRjNSbm6H1kwviCOp0tknJUDirhOjZAvKcwUeaRIKsmW5uYeZnCFVRnhdJZfwKZFlkIRbMJOg5O",
    location: "Hoàn Kiếm, Hà Nội"
  },
  {
    id: 3,
    name: "BS CKII Sarah Chen",
    specialty: "Thẩm Mỹ Nội Khoa",
    experience: 20,
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBp42hX_QyYZqLMvyZDqhQQ3mj21ma3HwfpnbKV-MG3BtwWw5M1wG03WB1dDRLC7CWGxuqICpAsMhMEdGHENbzAeBvBhZ96w_yXKRgtkZrbLN-0nqMI38aQdYi_tgsf0Jnsell7T_XDQmewRzRxEXx12O3iJDwl4oGY8ajHnpR4kcJ6jRA80VEfyxbBgrp1KvSycPpDIoq6S-Tkclpmwqi06itMhh2R9fH-AwdMVEw0GO9KSu3WWDzJpa86R_Ftj4Ekf4ri7uipH2ek",
    location: "Quận 1, TP. HCM"
  },
  {
    id: 4,
    name: "ThS. BS Marcus Gold",
    specialty: "Laser Công Nghệ Cao",
    experience: 10,
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDH1MSvNXIXdCzRy1ts4jsNlZTO9g24SVUP2iaoDXaAlBUqTi0ZV8uDlOjisZBf4067aSEQrWzOMGgGB_V2dbRo8eypWsk_U8EjZ1ujPNq9VPLd0TMGddsLOiGbyFEAZsrbuBL-dhw0HhTIiR2_8Zx_NsBer-ju_fHakD2qfFnGpTOFkkY1oxdlcZBzHTWzkqRfua1PVN3I--QVP22f3eMfdKcCGVftVDdbBvFO-cYocE5JZsYOquX4f8Ic3RnCUErwuGaxMFeT6U3G",
    location: "Quận 7, TP. HCM"
  }
];

export const CLINICS: Clinic[] = [
  {
    id: 1,
    name: "Azure Medical Spa",
    location: "Quận 1, TP. HCM",
    rating: 4.9,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrfr8kbDEfM2WVqKp7ksA1hJ16cT73lH84vX-A-AAau1gMBQEiKzlkKg-OFNK_3RlXsJaIj8BYkP2aKmU0hDMDyk8_XSj9Tgn3G539zwem7aRY59PhJ7BB9kGMx_SlF-APJR1MqslqXSc0eN6sobMDn7avDdpXy5ccGalK73kPSQUngCUUT13RvxXeqBfQbOa_dF5crB9DbXBWJcTMHBmVph8payz6VeaK8ly2j6iaAhr7mXtvqKyXwHapjaAXig1DKYw4BjwLiHos",
    tags: ["Laser CO2", "Skin Care"]
  },
  {
    id: 2,
    name: "Elite Derm Clinic",
    location: "Hoàn Kiếm, Hà Nội",
    rating: 4.8,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK-aV0Kp4s7zgK_SM3HtVE-V1_Fg8wwatjrdZ5foBT9GwpA9tjQXlqQu6MeYub6fhlXvoapc74fzV6zxoW1QkRDhOosKuyJM_J1_0Wbk2YTXuEKilk8gxukjeAxsWHD2XfS3sIIBgk32mqAZNNkJH6W3J_A7_6vHshpOk4SrkNqsELldgSeTh9et1fVVgRfGGytNM-olIAzgJVLEhv_ntdBOJbYdEPZZNOP2N7M4LRJzlEKOUj2NYqwOCYnZqPCXm93SREjgDvAf1o",
    tags: ["Dermatology", "Fat Loss"]
  },
  {
    id: 3,
    name: "Lumina Aesthetics",
    location: "Quận 3, TP. HCM",
    rating: 5.0,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWgbwfoczQmR6fXFi9daKUOidZY0VaUrImOU_Hoxax8nRaGTSCCm3yO8fyiz_TaYW2WUsxbZbjVyJwxecBhDKUVvCtBYXsMoUR467uNcuRXlHQSoX4mWb9JxcB1pU-r-ahhA6ZghSl5QNwP6Hj79i9Zw1ChQ8wpV6o2k2vR4ce-XqLYrSt0GCEXfEnU-Wemk8A-ZfdseRfVvIOUlF4Sp4sY5YHFKEG57rLG3UlJEYPT8GU6s5E3Os8v7IhDYalK5DNRQRJdIQAGbyc",
    tags: ["Surgery", "Premium"]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Picosure Pro Laser System",
    category: "Máy Laser",
    description: "Điều trị sắc tố, xóa xăm hiện đại",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs4klcAbjsRVMcB_N2dOv9Xr5xQIwXKifSS7FFrM6oIfR8mLXuihaFc_oIZ0Ct4sA92Y-aZdnJNTJzeM_vCyXjQAoN1pehZJFLAN2fSnNevQSPkJiwW-oyqe4oI4m_h-68PesSFwwW2SfLhCx9m2Amc4cnD6zplTNY5d43SVxgKJ4VODGZ_jxQJe3ds5bow5bjtG8e7r2bO7CP6Pfwqcf90o4O_Hcccxz8gXwHQvwT_0ITZhDhqhJDZYTcbF9elDUN32OOPcaC1DRV",
    isNew: true
  },
  {
    id: 2,
    name: "Ultherapy Hifu System S4",
    category: "Máy Nâng Cơ",
    description: "Công nghệ nâng cơ, trẻ hóa da",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgrtluUHVsonXkOYq8rK3yWJCp5EMAgz5XzMgz_z86FlTxVtHc3ULD22d1_c_S_ajhlFRcdCtCdDs35757wlzaWlXV5wXG97zbxJJv90b4uOQjr6rl5UXL845vAEBjJS3s8RvEPSy_lgCf0L2VJ2fmvvgaI_kTMeOyvMB69YKqxXCVLLmM5X3YhXwZxON5QabBipuqovC_gwhN4l-S_eNtsPHiAN2mkSduROkbVX6UFeYVZN59FN-_2G-N67Ne0Y6PSCXkhn0qYXoO"
  },
  {
    id: 3,
    name: "CoolSculpting Elite 2024",
    category: "Thiết Bị Body",
    description: "Giảm béo đông hủy mỡ không xâm lấn",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJXksrpJCKze11OhbRC0q2Ymt96EqLrX5w568tEEHje1twC_c6w_U0-zg2DwhZP5D4kSN5-BA2EVnuY_8Py44bg5q6wTiaf9iiNjZwswCF8_70LC5xxXakudsMOpzgbmQ-L34_F0AbLCMAqRd6tfBtyx8zwGke23cFsvtNZ5Vs5tKN3s4W_p7DH0qEKrHoSXDZeihu9HadhhXkkJIFRNM73LkqVOCnoiY1ydOCpFvTmTQOBmjPy3vlFBzjJBKBauzAlp6y4BMz-5W6"
  },
  {
    id: 4,
    name: "HydraFacial Syndeo",
    category: "Máy Chăm Sóc Da",
    description: "Hệ thống chăm sóc da đa tầng",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADdDmrsDIf1-DTvS4IDP5MzfZWN6-zt2BoUnQbSFM_0vWQjug-3EqtjK3Dk_7t-jVBG3SoWjK4kCNUnbTfhUWL_WCNZ83QnrXdAkZ19LlJbyD5tZoZR4bV_sbbkCfxtc9vfsm3S63a-GJCIafjrs6DmtlyNE9tx5SWWI4g-7-nqp95RY2NNPkS3751-S3GVoiOI3sPEQwOnnfmUBMgyALtF7vUAErvIMf0kHghelIq7bQ2l3Mse_NnghKj-pOr5JHGdTWC-6Bhqk-d"
  }
];

export const FEATURES: Feature[] = [
  { icon: "shield_with_heart", text: "An toàn chuẩn y khoa" },
  { icon: "workspace_premium", text: "Chuyên gia xác thực" },
  { icon: "devices", text: "Công nghệ hiện đại" },
  { icon: "support_agent", text: "Hỗ trợ chuyên môn 24/7" },
];