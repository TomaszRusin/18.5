
var Contact = React.createClass({
    propTypes: {
      item: React.PropTypes.object.isRequired,
    },
  
    render: function() {
      return (
        <div className="contactItem" id={this.id}>
          <img className="contactImage" src="https://www.sbp-creative.com/wp-content/uploads/2017/01/profile-placeholder.png"/>
          <p className="contactLabel">Imię: {this.props.item.firstName}</p>
          <p className="contactLabel">Nazwisko: {this.props.item.lastName}</p>
          <a className="contactEmail" href={"mailto:" + this.props.item.email}>{this.props.item.email}</a>
        </div>
      )
    },
  });