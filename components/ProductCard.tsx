import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5 bg-white border border-border-light rounded-lg overflow-hidden flex flex-col">
      <div className="aspect-square p-4 bg-slate-50 flex items-center justify-center relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply" 
          loading="lazy"
        />
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-brand-gold text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">New</div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest mb-1">{product.category}</span>
        <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-brand-gold transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-[10px] text-secondary mb-3">{product.description}</p>
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-50">
          <span className="text-sm font-bold text-slate-900">Liên hệ</span>
          <button className="bg-slate-100 hover:bg-brand-gold hover:text-white text-slate-600 p-1.5 rounded-md transition-colors">
            <span className="material-symbols-outlined text-lg">shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;