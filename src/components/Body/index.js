import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="left-navbar-heading">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="item">item 1</li>
                <li className="item">item 2</li>
                <li className="item">item 3</li>
                <li className="item">item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-section">
              <h1>Content</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {showRightNavbar ? (
            <div className="right-navbar ">
              <h1>Right Navbar</h1>
              <div>
                <p>Ad 1</p>
                <p>Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
