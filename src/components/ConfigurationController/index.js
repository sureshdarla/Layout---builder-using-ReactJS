import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        console.log(event.target.value)
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        console.log(event.target.value)
        onToggleShowLeftNavbar()
      }
      const onChangeRightNavbar = event => {
        console.log(event.target.value)
        onToggleShowRightNavbar()
      }

      return (
        <div className="configuration-controller-container">
          <div>
            <h1>Layout</h1>
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={showContent}
                id="content"
                onChange={onChangeContent}
              />
              <label htmlFor="content">Content</label>
            </div>
            <div className="checkbox-container">
              <input
                checked={showLeftNavbar}
                type="checkbox"
                id="leftNavbar"
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="leftNavbar">Left Navbar</label>
            </div>
            <div className="checkbox-container">
              <input
                checked={showRightNavbar}
                type="checkbox"
                id="rightNavbar"
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="rightNavbar">Right Navbar</label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
