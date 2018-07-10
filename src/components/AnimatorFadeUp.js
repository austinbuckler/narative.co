import React, { Component } from 'react'
import { isMobile } from 'react-device-detect'
import Observer from './Observer'

class AnimatorFadeUp extends Component {
  defaultProps = {
    enabledOnMobile: false,
  }

  calculateStyleCurves = ({ intersectionRatio, exiting }) => {
    // To avoid NaN errors, return out if there's no intersectionRatio
    if (!intersectionRatio) {
      return {}
    }

    const opacityCurve = Math.pow(intersectionRatio, 3)
    const transformCurve = Math.pow(intersectionRatio - 1, 2) * 200

    // Only change opacity when scrolling back up
    if (exiting) {
      return {
        opacity: opacityCurve,
      }
    }

    return {
      opacity: opacityCurve,
      transform: ` matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${transformCurve}, 0, 1)`,
    }
  }

  render() {
    const { children, enabledOnMobile } = this.props

    return (
      <Observer
        render={data => {
          // On mobile devices the animation is off by default
          if (enabledOnMobile && isMobile) {
            return <div style={this.calculateStyleCurves(data)}>{children}</div>
          } else if (isMobile) {
            return children
          }

          return <div style={this.calculateStyleCurves(data)}>{children}</div>
        }}
      />
    )
  }
}

export default AnimatorFadeUp
