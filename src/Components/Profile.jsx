export default function Profile() {
  return (
    <div className="sarah-card">
      <div className="sarah-image">
        <img src="/sarah.png" alt="Sarah Swift" />
      </div>

      <div className="sarah-details">
        <div className="sarah-name">
          <h2>Sarah Swift</h2>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="#00a83b"
              d="M12 2 15 3.5 18.3 3.7 19.8 6.5 22 9 21.5 12 22 15 19.8 17.5 18.3 20.3 15 20.5 12 22 9 20.5 5.7 20.3 4.2 17.5 2 15 2.5 12 2 9 4.2 6.5 5.7 3.7 9 3.5Z"
            />
            <path
              fill="#fff"
              d="m7.5 12.2 3 3 6-6-1.4-1.4-4.6 4.6-1.6-1.6Z"
            />
          </svg>
        </div>

        <p className="sarah-description">
          Product Designer who focuses
          <br />
          on simplicity & usability.
        </p>

        <div className="sarah-bottom">
          <div className="sarah-stats">

            <div className="sarah-stat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21v-2a8 8 0 0 1 16 0v2"
                />
              </svg>
              <span>312</span>
            </div>

            <div className="sarah-stat">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4h13a2 2 0 0 1 2 2v12M8 8h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2ZM2 7v11a2 2 0 0 0 2 2"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  d="m10 16 3-3 2 2 2-2"
                />
              </svg>
              <span>48</span>
            </div>

          </div>

          <button className="sarah-follow">
            Follow
            <span>+</span>
          </button>
        </div>
      </div>
    </div>
  );
}