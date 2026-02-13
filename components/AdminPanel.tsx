import React, { useState } from 'react';

interface AdminPanelProps {
  onLogout: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const [activeMenu, setActiveMenu] = useState('overview');

  return (
    <div className="bg-slate-50 min-h-screen flex font-sans animate-in fade-in duration-300">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full z-10">
        <div className="p-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="material-symbols-outlined text-white text-xl">grid_view</span>
            </div>
            <div>
                <h1 className="font-bold text-slate-900 text-base leading-tight">Admin Panel</h1>
                <p className="text-[10px] text-slate-500 font-medium">Super Admin Account</p>
            </div>
        </div>
        
        <nav className="flex-1 px-3 space-y-1">
            {/* Menu Items */}
            {[
                { id: 'overview', icon: 'dashboard', label: 'Tổng quan' },
                { id: 'approvals', icon: 'checklist_rtl', label: 'Duyệt hồ sơ' },
                { id: 'doctors', icon: 'medical_services', label: 'Quản lý Bác sĩ' },
                { id: 'clinics', icon: 'apartment', label: 'Quản lý Cơ sở' },
                { id: 'ecommerce', icon: 'shopping_cart', label: 'Thương mại điện tử' },
                { id: 'users', icon: 'group', label: 'Quản lý Người dùng' },
                { id: 'settings', icon: 'settings', label: 'Cấu hình hệ thống' },
            ].map(item => (
                <button 
                    key={item.id}
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeMenu === item.id 
                        ? 'bg-blue-50 text-brand-blue shadow-sm' 
                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                >
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    {item.label}
                </button>
            ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                 <div className="w-8 h-8 rounded-full bg-slate-200 bg-cover bg-center border border-slate-100" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxfEB9BHEJX2TpG6SXJ_Ckj0j3hHwknpKJteOKDJD0mYirtV9VltQGf6Wzv6QJslJs15coYS35wqfAHcAvCfVVyG_gJjJTeZ4m68XmrzjRaLQOs9z-BlAoqfIPmJdaUMzr4_dlJTBWBLWQiXjcZTUWZqCyd0mW7NjcFMlH7cYEsv3XkOcGvT8tRtr9O4CHVOR02pL9UFTJPGzl4k-0LRy5aneNmS9UuMdmKN1BPOSTDn1H7QpP8Bwp05AsMbBDKVvdjOm4GhJNORFu")'}}></div>
                 <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900 truncate">Lê Minh Tuấn</p>
                    <p className="text-[10px] text-green-600 font-bold uppercase truncate flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Trực tuyến
                    </p>
                 </div>
                 <button onClick={onLogout} title="Đăng xuất">
                    <span className="material-symbols-outlined text-slate-400 hover:text-red-500 transition-colors">logout</span>
                 </button>
            </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Hệ thống Quản Trị Toàn Diện</h2>
            <div className="flex items-center gap-4">
                <div className="relative group">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-brand-blue transition-colors">search</span>
                    <input 
                        type="text" 
                        placeholder="Tìm kiếm bác sĩ, đơn hàng, cơ sở..." 
                        className="pl-10 pr-4 py-2.5 rounded-full border-none bg-white shadow-sm text-sm w-80 focus:ring-2 focus:ring-brand-blue/20 transition-all placeholder:text-slate-400"
                    />
                </div>
                <button className="p-2.5 bg-white text-slate-500 hover:text-brand-blue hover:shadow-md transition-all rounded-full relative shadow-sm">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
                <button className="p-2.5 bg-white text-slate-500 hover:text-brand-blue hover:shadow-md transition-all rounded-full shadow-sm">
                    <span className="material-symbols-outlined">help</span>
                </button>
            </div>
        </div>

        {/* Dashboard Content */}
        {activeMenu === 'overview' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-6">
                     {[
                        { title: 'Chờ duyệt', value: '12', trend: '+5% so với tháng trước', color: 'amber', icon: 'checklist', trendColor: 'text-emerald-600' },
                        { title: 'Tổng doanh thu', value: '2.450.0M', trend: '-2% so với tháng trước', color: 'blue', icon: 'payments', trendColor: 'text-red-500' },
                        { title: 'Bác sĩ mới', value: '48', trend: '+12% tăng trưởng', color: 'emerald', icon: 'person_add', trendColor: 'text-emerald-600' },
                        { title: 'Đơn hàng mới', value: '156', trend: '+8% đơn hàng', color: 'purple', icon: 'shopping_bag', trendColor: 'text-emerald-600' },
                     ].map((stat, i) => (
                         <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 transition-colors">{stat.title}</span>
                                <div className={`p-2.5 rounded-xl bg-${stat.color}-50 text-${stat.color}-500 group-hover:scale-110 transition-transform`}>
                                     <span className="material-symbols-outlined">{stat.icon}</span>
                                </div>
                            </div>
                            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">{stat.value}</h3>
                            <p className={`text-[11px] font-bold ${stat.trendColor} flex items-center gap-1`}>
                                <span className="material-symbols-outlined text-sm">{stat.trendColor.includes('emerald') ? 'trending_up' : 'trending_down'}</span>
                                {stat.trend}
                            </p>
                         </div>
                     ))}
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Pending List */}
                    <div className="col-span-2 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                             <h3 className="font-bold text-lg text-slate-900">Danh sách chờ duyệt</h3>
                             <button className="text-xs font-bold text-brand-blue hover:underline">Xem tất cả</button>
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                                    <th className="pb-4 pl-2">Ngày đăng ký</th>
                                    <th className="pb-4">Tên đối tác</th>
                                    <th className="pb-4">Loại</th>
                                    <th className="pb-4 text-right pr-2">Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {[
                                    { date: '15/10/2023', name: 'BS. Nguyễn Văn An', type: 'Bác sĩ', initial: 'NA', color: 'blue' },
                                    { date: '14/10/2023', name: 'Thẩm mỹ viện Hera', type: 'Cơ sở', initial: 'HH', color: 'purple' },
                                    { date: '14/10/2023', name: 'BS. Lê Thị Bình', type: 'Bác sĩ', initial: 'LB', color: 'blue' },
                                ].map((row, i) => (
                                    <tr key={i} className="group hover:bg-slate-50 transition-colors">
                                        <td className="py-4 pl-2 text-slate-500 text-xs font-medium">{row.date}</td>
                                        <td className="py-4 font-bold text-slate-900 flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full bg-${row.color}-100 text-${row.color}-600 flex items-center justify-center text-xs shadow-sm`}>{row.initial}</div>
                                            {row.name}
                                        </td>
                                        <td className="py-4">
                                            <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${
                                                row.type === 'Bác sĩ' ? 'bg-blue-50 text-brand-blue' : 'bg-purple-50 text-purple-600'
                                            }`}>
                                                {row.type}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right pr-2">
                                            <div className="flex justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                                                <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded transition-colors" title="Xem chi tiết"><span className="material-symbols-outlined text-lg">visibility</span></button>
                                                <button className="p-1.5 text-emerald-500 hover:bg-emerald-50 rounded transition-colors" title="Duyệt"><span className="material-symbols-outlined text-lg">check_circle</span></button>
                                                <button className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors" title="Từ chối"><span className="material-symbols-outlined text-lg">cancel</span></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Activity Feed */}
                    <div className="col-span-1 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-900 mb-6">Hoạt động hệ thống</h3>
                        <div className="relative pl-4 space-y-8 before:absolute before:left-[19px] before:top-2 before:bottom-4 before:w-0.5 before:bg-slate-100">
                             {[
                                { title: 'Bác sĩ Trần Hùng đã đăng ký mới', desc: 'Hệ thống đang chờ kiểm duyệt thông tin', time: 'Vừa xong', icon: 'person_add', color: 'blue' },
                                { title: 'Đơn hàng #3492 hoàn tất', desc: 'Thanh toán bởi: TMV Hera', time: '15 phút trước', icon: 'shopping_bag', color: 'emerald' },
                                { title: 'Cập nhật cấu hình bảo mật', desc: 'Admin thay đổi thiết lập tường lửa', time: '1 giờ trước', icon: 'security', color: 'amber' },
                             ].map((item, i) => (
                                 <div key={i} className="relative pl-8">
                                     <div className={`absolute left-0 top-0 w-8 h-8 rounded-full bg-${item.color}-50 text-${item.color}-500 flex items-center justify-center border-4 border-white z-10 shadow-sm`}>
                                         <span className="material-symbols-outlined text-sm">{item.icon}</span>
                                     </div>
                                     <div>
                                         <p className="text-sm font-bold text-slate-900 leading-snug hover:text-brand-blue cursor-pointer transition-colors">{item.title}</p>
                                         <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                                         <p className={`text-[10px] font-bold mt-2 uppercase tracking-wider ${i === 0 ? 'text-brand-blue' : 'text-slate-400'}`}>{item.time}</p>
                                     </div>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="font-bold text-lg text-slate-900">Biểu đồ doanh thu</h3>
                            <select className="bg-slate-50 border-none text-xs font-bold rounded-lg px-3 py-2 text-slate-600 cursor-pointer hover:bg-slate-100 transition-colors focus:ring-0">
                                <option>Tháng này</option>
                                <option>Tháng trước</option>
                            </select>
                        </div>
                        <div className="h-48 flex items-end gap-3 justify-between px-4 pb-2">
                            {[40, 65, 30, 80, 50, 95, 20].map((h, i) => (
                                <div key={i} className="w-full bg-blue-50 rounded-t-lg relative group cursor-pointer">
                                    <div className="absolute bottom-0 left-0 right-0 bg-brand-blue rounded-t-lg transition-all duration-500 group-hover:bg-blue-700" style={{height: `${h}%`}}></div>
                                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded font-bold transition-all shadow-lg whitespace-nowrap z-10">
                                        {h * 10} Tr
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between px-4 text-[10px] font-bold text-slate-400 mt-2 uppercase">
                            <span>T2</span><span>T3</span><span>T4</span><span>T5</span><span>T6</span><span>T7</span><span>CN</span>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                             <h3 className="font-bold text-lg text-slate-900">Tăng trưởng người dùng</h3>
                             <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
                                 <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-blue"></span> Bác sĩ</div>
                                 <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> Khách hàng</div>
                             </div>
                        </div>
                        <div className="h-48 relative flex items-end overflow-hidden pl-4 pb-4 border-l border-b border-slate-100">
                             {/* SVG Mock for Line Chart */}
                             <svg className="absolute inset-0 w-full h-full p-4 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 90 Q 25 80 50 60 T 100 20" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                                <path d="M0 95 Q 25 90 50 75 T 100 40" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                                {/* Grid lines */}
                                <line x1="0" y1="25" x2="100" y2="25" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4" />
                                <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4" />
                                <line x1="0" y1="75" x2="100" y2="75" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4" />
                             </svg>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;