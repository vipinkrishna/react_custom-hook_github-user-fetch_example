import React, { useState } from 'react';
import useFetchGithubUserDetails from '../hooks/useFetchGithubUserDetails';
import './ShowGithubUserDetails.css';

export default function ShowGithubUserDetails() {
  const [inputText, setInputText] = useState('');
  const [inputUserName, setInputUserName] = useState();
  const [githubUserDetails, loading, error] =
    useFetchGithubUserDetails(inputUserName);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.key === 'Enter') {
      setInputUserName(inputText);
    }
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={inputTextHandler}
          onKeyDown={enterHandler}
          placeholder="Enter Github UserName (Press Enter)..."
        />
      </div>
      {githubUserDetails && (
        <div className="card">
          <b>{githubUserDetails?.login}</b>
          <p>{githubUserDetails?.bio}</p>
          <p>
            <a href={githubUserDetails?.html_url} target="_blank">
              {githubUserDetails?.html_url}
            </a>
          </p>
        </div>
      )}

      {loading && <p style={{ color: 'green' }}>Loading...</p>}
      {error && <p style={{ color: 'orange' }}>{error}</p>}
    </>
  );
}
