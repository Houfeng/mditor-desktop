/**
 * Copyright (c) 2015-present Houfeng
 * @homepage https://github.com/Houfeng/mota
 * @author Houfeng <admin@xhou.net>
 */

const React = require('react');

function stateful(stateless) {
  if (!stateless._stateful_) {
    class StatelessWrapper extends React.Component {
      render() {
        return stateless({ model: this.model, ...this.props }, this.context);
      }
    }
    stateless._stateful_ = StatelessWrapper;
  }
  return stateless._stateful_;
}

stateful.stateful = stateful;
module.exports = stateful;