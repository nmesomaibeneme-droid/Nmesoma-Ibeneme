import React from 'react';
import mhLogoImg from '../assets/images/mh_jesse_logo_1786120850439.jpg';

interface MHJesseLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  variant?: 'light' | 'dark';
  className?: string;
}

export const MHJesseLogo: React.FC<MHJesseLogoProps> = ({
  size = 'md',
  showText = true,
  variant = 'light',
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textTitleClasses = {
    sm: 'text-sm font-black tracking-tight leading-none',
    md: 'text-base font-black tracking-tight leading-none',
    lg: 'text-xl font-black tracking-tight leading-none',
    xl: 'text-2xl font-black tracking-tight leading-none',
  };

  const textSubClasses = {
    sm: 'text-[9px] font-bold uppercase tracking-widest mt-0.5',
    md: 'text-[10px] font-bold uppercase tracking-widest mt-0.5',
    lg: 'text-[11px] font-bold uppercase tracking-widest mt-1',
    xl: 'text-xs font-bold uppercase tracking-widest mt-1',
  };

  const textColor = variant === 'dark' ? 'text-white' : 'text-mh-dark';
  const subColor = variant === 'dark' ? 'text-mh-blue' : 'text-mh-blue';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className={`${sizeClasses[size]} rounded-sm bg-white p-0.5 border border-slate-200/80 shadow-xs shrink-0 flex items-center justify-center overflow-hidden`}>
        <img
          src={mhLogoImg}
          alt="MH Jesse Nigeria Limited Logo"
          className="w-full h-full object-contain mix-blend-multiply"
          referrerPolicy="no-referrer"
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`${textTitleClasses[size]} ${textColor}`}>
            MH JESSE
          </span>
          <span className={`${textSubClasses[size]} ${subColor}`}>
            Nigeria Limited
          </span>
        </div>
      )}
    </div>
  );
};
