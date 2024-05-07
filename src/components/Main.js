import React, { useState } from 'react';
// import './MainPage.css';

const Main = () => {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const toggleFlip1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const toggleFlip2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const toggleFlip3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  return (
    <div>
      <div className="head">
        <h1><span className="brain">Brain</span>Trek</h1>
        <a href="/" className="login">LOGIN</a>
      </div>
      <div className="boxes-container">
        <div
          className="box-container"
          id="b1"
          onClick={toggleFlip1}
          onTouchStart={toggleFlip1}
        >
          <div className="box">
            <div className="box-inner front">
              <img src="https://s3-alpha-sig.figma.com/img/e6a5/254a/f4a91cf6193f384a17f5e8e170519e14?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UGBJMbiJCUFNc77Olx5aKO3fPDUNYkJfaNASMEer6NPO5gdn1b3aoDMr4qu-X1VWB9vZf77Zs3eUC~vd28Lz0WaoM9AMNU0DGrF9oP5ZbO6LJ4GXda52HHHB2joFGr-YaoWhsL99v-R4K2vUDvQldqaU5z-uRvG4A6vEziHGSZV5EBRNWvDBkO9R29-VO1rsj9G~p8RW8vmApQ7XNaCYdLCryWIAmXjUAj~9ZQ-Yt112s-tRzl3qdjAT13zieuBMztykOJRH7wDK48J~9wKOCq9LEkMhV987EiPjHEQwe0nTJMIOa7DdkDbNRxCxPy97gZEDXn3pGsBehLoSiLVh0A__" alt="Quiz 1" />
              <p>These quizzes are designed to help school children unleash their knowledge.</p>
            </div>
            <div className="box-inner back">
              <h2>Select the Standard</h2>
              <select name="standard" id="standard">
                <option value="1">Standard 1</option>
                <option value="2">Standard 2</option>
                <option value="3">Standard 3</option>
                <option value="4">Standard 4</option>
                <option value="5">Standard 5</option>
                <option value="6">Standard 6</option>
                <option value="7">Standard 7</option>
                <option value="8">Standard 8</option>
                <option value="9">Standard 9</option>
                <option value="10">Standard 10</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className="box-container"
          id="b2"
          onClick={toggleFlip2}
          onTouchStart={toggleFlip2}
        >
          <div className="box">
            <div className="box-inner front">
              <img src="https://media.licdn.com/dms/image/D5603AQE3RoU3quePOQ/profile-displayphoto-shrink_800_800/0/1702850790710?e=2147483647&v=beta&t=cP_TjPJeNju6FMY9Lki8hF_AzFkyw1iJ0rk3-m6T1-U" alt="Quiz 2" />
              <p>This will help serve as a valuable preparation tool for UPSC candidates.</p>
            </div>
            <div className="box-inner back">
              <p>Back Content</p>
              <div>
                <input type="radio" name="exam" value="mains" />
                <label>Mains</label>
                <input type="radio" name="exam" value="prilims" />
                <label>Prilims</label>
                <input type="radio" name="exam" value="interview" />
                <label>Interview</label>
              </div>
            </div>
          </div>
        </div>
        <div
          className="box-container"
          id="b3"
          onClick={toggleFlip3}
          onTouchStart={toggleFlip3}
        >
          <div className="box">
            <div className="box-inner front">
              <img src="https://s3-alpha-sig.figma.com/img/7d7c/828b/9bec8c11d6e0e8db3473c24be53146a2?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ikQPkXzDM4Zd7X2a45I1tX3YR5RK-jK5GhbPTxq6te-9utv8hOjLbzSMiMS-XYVtjBVuQEq2rsa6qptc-RpdtXjI7ltK73CioGzhTBlf-uoeoY6f6syvBy6RmBV2agSMefKwMdE2o0OSaaUm-YQvxmyPQSFXwnjcV-3hdM4qAYirCIUOoQC4PgGLGqGTT0pM2hEosXZPaI4FUsMtkLLKlFsXtPSqGnzwcIo~vZFO-0wwFTlkLgtfCKV5Zd6NC8Kmzjei7IVyKFHAKMARh~YPp1d1OxjpV29vXjHuNpoia6AMXSJmAjKyQZ2DKSBg4KHbWa9Xv4gOMnKL-5ctNbK-TA__" alt="Quiz 3" />
              <p>This will help you improve your interview skills.</p>
            </div>
            <div className="box-inner back">
              <p>Back Content</p>
              <div>
                <input type="radio" name="round" value="aptitude" />
                <label>Aptitude</label>
                <input type="radio" name="round" value="technical" />
                <label>Technical</label>
                <input type="radio" name="round" value="hr round" />
                <label>HR Round</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
