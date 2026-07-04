import { FC } from 'react';

interface IPShieldProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const IPShield: FC<IPShieldProps> = ({
  width = 40,
  height = 40,
  color = '#0F2B6B',
  className = '',
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transition: 'stroke 0.3s ease, fill 0.3s ease' }}
    >
      {/* Наружный контур щита */}
      <path
        d="M100 10 L170 35 L170 100 Q170 155 100 190 Q30 155 30 100 L30 35 Z"
        stroke={color}
        strokeWidth="2"
        fill="none"
        opacity="0.9"
      />

      {/* Внутренний контур щита */}
      <path
        d="M100 22 L158 43 L158 98 Q158 145 100 175 Q42 145 42 98 L42 43 Z"
        stroke={color}
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />

      {/* Буква «I» — три прямоугольника */}
      {/* Вертикальная ножка */}
      <rect x="72" y="65" width="10" height="55" rx="2" fill={color} opacity="0.95" />
      {/* Верхняя засечка */}
      <rect x="68" y="58" width="18" height="6" rx="3" fill={color} opacity="0.95" />
      {/* Нижняя засечка */}
      <rect x="68" y="121" width="18" height="6" rx="3" fill={color} opacity="0.95" />

      {/* Буква «T» — два прямоугольника */}
      {/* Вертикальная ножка */}
      <rect x="100" y="58" width="10" height="62" rx="2" fill={color} opacity="0.95" />
      {/* Верхняя перекладина */}
      <rect x="88" y="52" width="34" height="10" rx="3" fill={color} opacity="0.95" />

      {/* Левая лавровая ветвь (5 перьев) */}
      <g opacity="0.7">
        <path d="M55 140 Q45 130 35 135" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M53 132 Q43 122 33 127" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M51 124 Q41 114 31 119" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M50 116 Q40 106 30 111" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M49 108 Q39 98 29 103" stroke={color} strokeWidth="1.5" fill="none" />
      </g>

      {/* Правая лавровая ветвь (5 перьев, зеркально) */}
      <g opacity="0.7">
        <path d="M145 140 Q155 130 165 135" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M147 132 Q157 122 167 127" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M149 124 Q159 114 169 119" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M150 116 Q160 106 170 111" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M151 108 Q161 98 171 103" stroke={color} strokeWidth="1.5" fill="none" />
      </g>

      {/* Корона (5-сегментная зубчатая линия) */}
      <path
        d="M85 28 L92 18 L100 25 L108 18 L115 28"
        stroke={color}
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
