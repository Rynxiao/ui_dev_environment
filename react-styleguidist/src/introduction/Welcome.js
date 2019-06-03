import React from 'react';
import PropTypes from 'prop-types';

const Main = props => (
  <article
    {...props}
    style={{
      padding: 15,
      lineHeight: 1.4,
      fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
      backgroundColor: '#fff',
    }}
  />
);

const Title = ({ children, ...props }) => <h1 {...props}>{children}</h1>;
Title.propTypes = {
  children: PropTypes.node,
};
Title.defaultProps = {
  children: undefined,
};

const InlineCode = props => (
  <code
    {...props}
    style={{
      fontSize: 15,
      fontWeight: 600,
      padding: '2px 5px',
      border: '1px solid #eae9e9',
      borderRadius: 4,
      backgroundColor: '#f3f2f2',
      color: '#3a3a3a',
    }}
  />
);

const Link = ({ children, href, ...props }) => (
  <a
    href={href}
    {...props}
    style={{
      color: '#1474f3',
      textDecoration: 'none',
      borderBottom: '1px solid #1474f3',
      paddingBottom: 2,
    }}
  >
    {children}
  </a>
);
Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};
Link.defaultProps = {
  href: undefined,
  children: undefined,
};

const NavButton = ({ children, ...props }) => (
  <button
    {...props}
    type="button"
    style={{
      color: '#1474f3',
      textDecoration: 'none',
      borderBottom: '1px solid #1474f3',
      paddingBottom: 2,
      borderTop: 'none',
      borderRight: 'none',
      borderLeft: 'none',
      backgroundColor: 'transparent',
      padding: 0,
      cursor: 'pointer',
      font: 'inherit',
    }}
  >
    {children}
  </button>
);

NavButton.propTypes = {
  children: PropTypes.node,
};
NavButton.defaultProps = {
  children: undefined,
};

/** Welcome Component */
const Welcome = ({ showApp }) => (
  <Main>
    <Title>Welcome to react styleguidist</Title>
    <p>This is a UI component dev environment for your app.</p>
    <p>
      We've added some basic components inside the <InlineCode>src/components</InlineCode> directory.
    </p>
    <p>
      See these sample <NavButton onClick={showApp}>components</NavButton> for a component called{' '}
      <InlineCode>Button</InlineCode>.
    </p>
    <p>
      You can also edit those components and see changes right away.
      <br />
      (Try editing the <InlineCode>Button</InlineCode> components located at{' '}
      <InlineCode>src/components/Button.js</InlineCode>
      .)
    </p>
    <p>
      Usually we create stories with smaller UI components in the app.
      <br />
      Have a look at the{' '}
      <Link
        href="https://react-styleguidist.js.org/docs/getting-started.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        React Styleguidist
      </Link>{' '}
      section in our documentation.
    </p>
  </Main>
);

Welcome.displayName = 'Welcome';
Welcome.propTypes = {
  showApp: PropTypes.func,
};
Welcome.defaultProps = {
  showApp: null,
};

export { Welcome as default };
