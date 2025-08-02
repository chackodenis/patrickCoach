
interface BlogsErrorProps {
  message?: string;
}

export const BlogsError = ({ message = "Error loading articles. Please try again later." }: BlogsErrorProps) => {
  return (
    <div className="text-center p-8 bg-red-50 rounded-lg border border-red-100" data-id="error-container">
      <p className="text-red-600" data-id="error-message">{message}</p>
    </div>
  );
};
