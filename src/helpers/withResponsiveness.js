import React from 'react'
import optimizedResize from './optimizedResize.js'

const windowGlobal = typeof window !== 'undefined' && window

function getWidth () {
  return windowGlobal.innerWidth
}

export default function(Component) {
  return class WithResponsiveness extends React.PureComponent {
    constructor (props) {
      super(props)

      this.state = {
        width: getWidth() ? getWidth() : 500
      }

      this._setRef = this._setRef.bind(this)
      this.updateSize = this.updateSize.bind(this)
    }

    componentDidMount () {
      optimizedResize.addHorizontal(this.updateSize)

      this.updateSize()
    }

    componentWillUnmount () {
      optimizedResize.clearAll()

      this.updateSize()
    }

    updateSize () {
      const width = this._rootNode.clientWidth

      if (width !== this.state.width) {
        this.setState({
        width})
      }
    }

    _setRef (componentNode) {
      this._rootNode = componentNode
    }

    render () {
      return (
        <div className='responsive-container' ref={this._setRef}>
          <Component width={this.state.width} {...this.props} />
        </div>
      )
    }
  }
}
