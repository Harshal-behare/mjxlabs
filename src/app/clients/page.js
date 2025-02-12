export default function ClientsLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign in</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Sign in
        </button>
        <div className="mt-4 text-center">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
        </div>
        <div className="mt-4 text-center">
          <span>or</span>
        </div>
        <div className="mt-4 text-center">
          <button className="flex items-center justify-center w-full border border-gray-300 rounded-md p-2">
            <img src="/google-icon.svg" alt="Google" className="mr-2" />
            Sign in with Google
          </button>
        </div>
        <div className="mt-4 text-center">
          <span>Don't have an account? <a href="#" className="text-blue-500 hover:underline">Hire now</a></span>
        </div>
      </div>
    </div>
  );
} 