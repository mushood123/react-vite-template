import { del, get, patch, post, put } from '../../api';
const Home = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-black mb-2">React Vite Template</h1>
          <p className="text-gray-800">
            A modern React project template with essential tools and configurations
          </p>
        </div>

        {/* Quick Start */}
        <section className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-black mb-4">🚀 Quick Start</h2>
          <div className="space-y-2 text-gray-900">
            <p>
              <strong>1.</strong> Clone the repository
            </p>
            <p>
              <strong>2.</strong> Install dependencies:{' '}
              <code className="bg-gray-200 px-2 py-1 rounded">npm install</code>
            </p>
            <p>
              <strong>3.</strong> Run development server:{' '}
              <code className="bg-gray-200 px-2 py-1 rounded">npm run dev</code>
            </p>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">✨ Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-medium text-black">Vite</h3>
              <p className="text-sm text-gray-700">Fast build tool</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🎨</div>
              <h3 className="font-medium text-black">Tailwind CSS</h3>
              <p className="text-sm text-gray-700">Utility-first CSS</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-medium text-black">React 19</h3>
              <p className="text-sm text-gray-700">Latest React</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🔧</div>
              <h3 className="font-medium text-black">ESLint</h3>
              <p className="text-sm text-gray-700">Code linting</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">💅</div>
              <h3 className="font-medium text-black">Prettier</h3>
              <p className="text-sm text-gray-700">Code formatting</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🐕</div>
              <h3 className="font-medium text-black">Husky</h3>
              <p className="text-sm text-gray-700">Git hooks</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">🌐</div>
              <h3 className="font-medium text-black">Axios</h3>
              <p className="text-sm text-gray-700">HTTP client</p>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg text-center">
              <div className="text-2xl mb-2">📦</div>
              <h3 className="font-medium text-black">TypeScript</h3>
              <p className="text-sm text-gray-700">Type definitions</p>
            </div>
          </div>
        </section>

        {/* Commands */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">📋 Available Commands</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium text-black mb-2">Development</h3>
              <div className="space-y-1 text-sm">
                <p>
                  <code className="bg-gray-200 px-2 py-1 rounded">npm run dev</code> - Start dev
                  server
                </p>
                <p>
                  <code className="bg-gray-200 px-2 py-1 rounded">npm run preview</code> - Preview
                  build
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium text-black mb-2">Build & Deploy</h3>
              <div className="space-y-1 text-sm">
                <p>
                  <code className="bg-gray-200 px-2 py-1 rounded">npm run build</code> - Build for
                  production
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium text-black mb-2">Code Quality</h3>
              <div className="space-y-1 text-sm">
                <p>
                  <code className="bg-gray-200 px-2 py-1 rounded">npm run lint</code> - Check
                  linting
                </p>
                <p>
                  <code className="bg-gray-200 px-2 py-1 rounded">npm run lint:fix</code> - Fix
                  linting issues
                </p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 p-4 rounded-lg">
              <h3 className="font-medium text-black mb-2">Formatting</h3>
              <div className="space-y-1 text-sm">
                <p>
                  <code className="bg-gray-200 px-2 py-1 rounded">npm run format</code> - Format
                  code
                </p>
                <p>
                  <code className="bg-gray-200 px-2 py-1 rounded">npm run format:check</code> -
                  Check formatting
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Setup */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">🌐 API Configuration</h2>
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <p className="text-gray-900 mb-3">
              The project includes a pre-configured API client with Axios:
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Base URL:</strong> Set{' '}
                <code className="bg-gray-200 px-2 py-1 rounded">VITE_BASE_URL</code> in your
                environment
              </p>
              <p>
                <strong>Available methods:</strong>{' '}
                <code className="bg-gray-200 px-2 py-1 rounded">get</code>,{' '}
                <code className="bg-gray-200 px-2 py-1 rounded">post</code>,{' '}
                <code className="bg-gray-200 px-2 py-1 rounded">put</code>,{' '}
                <code className="bg-gray-200 px-2 py-1 rounded">patch</code>,{' '}
                <code className="bg-gray-200 px-2 py-1 rounded">del</code>
              </p>
              <p>
                <strong>Usage:</strong>{' '}
                <code className="bg-gray-200 px-2 py-1 rounded">
                  import {(get, post, put, patch, del)} from &apos;./api&apos;
                  &apos;./endpoints&apos;
                </code>
              </p>
            </div>
          </div>
        </section>

        {/* Git Hooks */}
        <section>
          <h2 className="text-2xl font-semibold text-black mb-4">🔗 Git Hooks (Husky)</h2>
          <div className="bg-white border border-gray-200 p-4 rounded-lg">
            <p className="text-gray-900 mb-2">Pre-commit hooks automatically run:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-800">
              <li>ESLint checks and fixes</li>
              <li>Prettier formatting</li>
              <li>Lint-staged for staged files only</li>
            </ul>
            <p className="text-sm text-gray-800 mt-2">
              Setup:{' '}
              <code className="bg-gray-100 border border-gray-300 px-2 py-1 rounded">
                npm run prepare
              </code>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-gray-700 text-sm border-t pt-6">
          <p>Ready to build something amazing? Start coding! 🚀</p>
        </footer>
      </div>
    </>
  );
};

export { Home };
