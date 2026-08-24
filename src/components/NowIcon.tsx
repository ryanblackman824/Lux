import * as icons from "../lib/now-icon-set";

const ICON_SIZES = { sm: 12, md: 16, lg: 24, xl: 32 } as const;

function camelize(str: string) {
  return str.replace(/^([A-Z])|[\s-_]+(\w)/g, (_match, p1, p2) =>
    p2 ? p2.toUpperCase() : p1.toLowerCase(),
  );
}

type NowIconProps = {
  icon: string;
  size?: keyof typeof ICON_SIZES;
  className?: string;
};

/** Renders icons from @servicenow/now-icon (MIT), matching the real now-icon web component. */
export default function NowIcon({
  icon,
  size = "md",
  className,
}: NowIconProps) {
  const iconSize = ICON_SIZES[size];
  const iconName = camelize(icon) + iconSize;
  const markup = (icons as Record<string, string>)[iconName];

  if (!markup) return null;

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox={`0 0 ${iconSize} ${iconSize}`}
      width={iconSize}
      height={iconSize}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
