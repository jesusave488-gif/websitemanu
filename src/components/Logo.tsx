import { LOGO_PATH, LOGO_RATIO, LOGO_VIEWBOX } from "./logo-path";

type LogoProps = {
  /** Hauteur en pixels ; la largeur suit le ratio d'origine (≈ 3:1). */
  size?: number;
  className?: string;
};

/**
 * Logo manuscrit « KIKI », affiché en SVG en ligne.
 * Il prend la couleur du texte (currentColor) : ardoise sur fond clair, blanc sur fond sombre.
 */
export default function Logo({ size = 28, className }: LogoProps) {
  return (
    <svg
      viewBox={LOGO_VIEWBOX}
      height={size}
      width={Math.round(size * LOGO_RATIO)}
      className={className}
      role="img"
      aria-label="Emmanuel KIKI"
      focusable="false"
    >
      <path fill="currentColor" fillRule="evenodd" d={LOGO_PATH} />
    </svg>
  );
}
