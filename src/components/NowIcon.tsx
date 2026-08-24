import * as icons from "../lib/now-icon-set";

// Render sizes as used by this design's icon component (xs/sm/md/lg/xl = 12/16/20/24/32).
// The vendored path data only ships at 12/16/24/32, so "md" (20) borrows the 24px
// paths and scales the <svg> down to 20 — vector paths scale cleanly either way.
const RENDER_SIZE = { xs: 12, sm: 16, md: 20, lg: 24, xl: 32 } as const;
const PATH_SIZE: Record<keyof typeof RENDER_SIZE, 12 | 16 | 24 | 32> = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 24,
  xl: 32,
};

function camelize(str: string) {
  return str.replace(/^([A-Z])|[\s-_]+(\w)/g, (_match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase(),
  );
}

type NowIconProps = {
  icon: string;
  size?: keyof typeof RENDER_SIZE;
  className?: string;
};

/** Renders icons from @servicenow/now-icon (MIT), matching this design's icon sizing scale. */
export default function NowIcon({
  icon,
  size = "md",
  className,
}: NowIconProps) {
  const renderSize = RENDER_SIZE[size];
  const pathSize = PATH_SIZE[size];
  const iconName = camelize(icon) + pathSize;
  const markup = (icons as Record<string, string>)[iconName];

  if (!markup) return null;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox={`0 0 ${pathSize} ${pathSize}`}
      width={renderSize}
      height={renderSize}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
