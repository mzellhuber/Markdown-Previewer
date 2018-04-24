
var MyContainer = React.createClass({
  displayName: "MyContainer",

  changeVal: function changeVal(newVal) {
    this.setState({
      value: newVal
    });
  },
  getInitialState: function getInitialState() {
    return {
      value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
    };
  },
  markupData: function markupData(value) {
    var markupData = marked(value, { sanitize: true });
    return { __html: markupData };
  },
  render: function render() {
    return React.createElement(
      "div",
      { className: "row" },
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement(TextInput, { value: this.state.value, changeVal: this.changeVal })
      ),
      React.createElement(
        "div",
        { className: "col-md-6" },
        React.createElement("p", { dangerouslySetInnerHTML: this.markupData(this.state.value) })
      )
    );
  }

});

var TextInput = React.createClass({
  displayName: "TextInput",

  changeVal: function changeVal() {
    var newVal = this.refs.inputVal.getDOMNode().value;
    this.props.changeVal(newVal);
  },
  render: function render() {
    return React.createElement("textarea", { rows: "30", className: "form-control", type: "text", ref: "inputVal", value: this.props.value, onChange: this.changeVal });
  }
});

React.render(React.createElement(MyContainer, null), document.getElementById("container"));