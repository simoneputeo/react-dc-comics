export default function Alert({
    children,
    textColor = "text-red-800",
    bgColor = "bg-red-100",
    message = "Si è verificato un errore.",
}) {
    return (
        <div className={`p-4 rounded-md ${bgColor}`}>
            <div className={`text-sm ${textColor}`}>
                {children || message}
            </div>
        </div>
    );
}