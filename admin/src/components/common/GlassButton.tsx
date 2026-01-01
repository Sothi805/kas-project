import React from "react";

interface GlassButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    variant?: "primary" | "secondary";
}

const GlassButton: React.FC<GlassButtonProps> = ({
    children,
    loading = false,
    variant = "primary",
    disabled,
    className = "",
    ...props
}) => {
    const baseClasses = `
    w-full rounded-full py-2 font-medium text-white cursor-pointer
    bg-transparent bg-clip-padding backdrop-filter backdrop-blur-xs inset-shadow-white/50 inset-shadow-xs shadow-white/50 shadow-xs border/50 border-gray-50
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

    const variants = {
        primary: "hover:bg-white/15",
        secondary: "bg-white/5 hover:bg-white/10",
    };

    return (
        <button
            disabled={disabled || loading}
            className={`${baseClasses} ${variants[variant]} ${className}`}
            {...props}
        >
            {loading ? "Loading..." : children}
        </button>
    );
};

export default GlassButton;
