import { ICONS } from "../lib/icons";

const RENDER_SIZE = { xs: 12, sm: 16, md: 20, lg: 24, xl: 32 } as const;

type NowIconProps = {
  icon: string;
  size?: keyof typeof RENDER_SIZE;
  className?: string;
};

/** Renders icons sourced from Figma's Horizon 2.0 Icons library. */
export default function NowIcon({
  icon,
  size = "md",
  className,
}: NowIconProps) {
  const entry = ICONS[icon];
  if (!entry) return null;

  const renderSize = RENDER_SIZE[size];

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox={entry.viewBox}
      width={renderSize}
      height={renderSize}
      dangerouslySetInnerHTML={{ __html: entry.markup }}
    />
  );
}
