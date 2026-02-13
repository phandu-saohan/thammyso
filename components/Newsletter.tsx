import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-16 bg-slate-50 border-y border-border-light">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-xl font-bold mb-2">Đăng ký nhận bản tin y khoa</h2>
        <p className="text-secondary text-xs mb-6 font-medium">Cập nhật xu hướng công nghệ làm đẹp và ưu đãi mới nhất.</p>
        <form className="flex flex-col sm:flex-row gap-2 border border-border-light rounded-lg p-1.5 bg-white shadow-sm ring-4 ring-slate-100" onSubmit={(e) => e.preventDefault()}>
          <input 
            className="flex-1 px-4 py-3 sm:py-2 border-none focus:ring-0 text-sm bg-slate-50 sm:bg-transparent rounded sm:rounded-none placeholder:text-slate-400" 
            placeholder="Email nhận tin..." 
            type="email" 
          />
          <button className="bg-brand-blue text-white px-6 py-3 sm:py-2 text-[11px] font-bold uppercase rounded hover:bg-blue-700 transition-all w-full sm:w-auto tracking-wider">
            Đăng ký
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;