export default function Footer() {
  return (
    <>
      <footer className="text-center text-sm text-gray-400 border-t border-gray-600 border-opacity-50 mt-10 py-4">
        <p>
          Built by the Botpress Team <br />
          <a
            href="https://botpress.com/academy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Academy
          </a>{" "}
          ·{" "}
          <a
            href="https://discord.gg/botpress"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Community
          </a>{" "}
          ·{" "}
          <a
            href="https://www.youtube.com/botpress"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            YouTube
          </a>{" "}
          ·{" "}
          <a
            href="https://botpress.com/docs/home"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Documentation
          </a>
        </p>
      </footer>
    </>
  );
}
