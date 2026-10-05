import { useEffect, useRef, useState } from "react";
import "./TextPressure.css";
import { useTheme } from "next-themes";

interface TextPressureProps {
  text?: string;
  fontFamily?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
  minFontSize?: number;
}

const TextPressure: React.FC<TextPressureProps> = ({
  text = "Compressa",
  fontFamily = "var(--font-sans)",
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = "#FFFFFF",
  strokeColor = "#FF0000",
  strokeWidth = 2,
  className = "",
  minFontSize = 24,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const theme = useTheme();
  const lastInteractionRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const isHoveringRef = useRef(false);

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split("");

  const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => {
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  };
  const defaultRegion = {
    x: 200, // starting x coordinate
    y: 100, // starting y coordinate
    width: 200, // width of the region
    height: 200, // height of the region
  };

  // Added function to apply default effect
  const applyDefaultEffect = () => {
    if (titleRef.current) {
      const titleRect = titleRef.current.getBoundingClientRect();
      const maxDist = titleRect.width / 2;

      spansRef.current.forEach((span) => {
        if (!span) return;

        const rect = span.getBoundingClientRect();
        const charCenter = {
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height / 2,
        };

        if (
          charCenter.x >= defaultRegion.x &&
          charCenter.x <= defaultRegion.x + defaultRegion.width &&
          charCenter.y >= defaultRegion.y &&
          charCenter.y <= defaultRegion.y + defaultRegion.height
        ) {
          const d = dist(mouseRef.current, charCenter);

          const getAttr = (
            distance: number,
            minVal: number,
            maxVal: number
          ) => {
            const val = maxVal - Math.abs((maxVal * distance) / maxDist);
            return Math.max(minVal, val + minVal);
          };

          const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : "0";
          const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : "1";

          span.style.opacity = alphaVal;
          span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
        }
      });
    }
  };

  useEffect(() => {
    lastInteractionRef.current = performance.now();

    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
      lastInteractionRef.current = performance.now();
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
      lastInteractionRef.current = performance.now();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    if (containerRef.current) {
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    // Call applyDefaultEffect to set the default effect
    applyDefaultEffect();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const setSize = () => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } =
      containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();

      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  };

  useEffect(() => {
    setSize();
    window.addEventListener("resize", setSize);
    return () => window.removeEventListener("resize", setSize);
  }, [scale, text]);

  useEffect(() => {
    let rafId: number;

    const animate = () => {
      const currentTime = performance.now();

      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;

        spansRef.current.forEach((span, index) => {
          if (!span) return;

          if (!isHoveringRef.current) {
            const idleTime = currentTime - (lastInteractionRef.current + 2000);
            const wave = Math.sin(idleTime * 0.0001 + index * 0.3) * 0.3 + 0.5; // Wave effect

            const wdth = 50 + wave * 150; // 50-200
            const wght = 100 + wave * 400; // 400-600
            const italVal = (wave * 0.5).toFixed(2); // Subtle italic
            const alphaVal = (0.8 + wave * 0.2).toFixed(2); // 80-100% opacity

            span.style.opacity = alphaVal;
            span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
          } else {
            const rect = span.getBoundingClientRect();
            const charCenter = {
              x: rect.x + rect.width / 2,
              y: rect.y + rect.height / 2,
            };

            const d = dist(mouseRef.current, charCenter);

            const getAttr = (
              distance: number,
              minVal: number,
              maxVal: number
            ) => {
              const val = maxVal - Math.abs((maxVal * distance) / maxDist);
              return Math.max(minVal, val + minVal);
            };

            const wdth = width ? Math.floor(getAttr(d, 5, 200)) : 100;
            const wght = weight ? Math.floor(getAttr(d, 100, 900)) : 400;
            const italVal = italic ? getAttr(d, 0, 1).toFixed(2) : "0";
            const alphaVal = alpha ? getAttr(d, 0, 1).toFixed(2) : "1";

            span.style.opacity = alphaVal;
            span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
          }
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [width, weight, italic, alpha, chars.length]);

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    lastInteractionRef.current = performance.now();
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
    lastInteractionRef.current = performance.now();
  };

  return (
    <div
      ref={containerRef}
      className='relative w-full h-full overflow-hidden bg-transparent'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1
        ref={titleRef}
        className={`text-pressure-title ${className} ${
          flex ? "flex justify-between" : ""
        } ${stroke ? "stroke" : ""} uppercase text-center`}
        style={{
          fontFamily,
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: "center top",
          margin: 0,
          fontWeight: 100,
          color: stroke ? undefined : textColor,
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={(el) => {
              spansRef.current[i] = el;
            }}
            data-char={char}
            className='inline-block'
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
