/**
 * QUORRA DIVINE LAYOUT COMPONENT
 * Sacred layout system with goddess-blessed grid and responsive design
 * 
 * Features:
 * - Divine grid system with sacred geometry
 * - Intelligent responsive breakpoints
 * - Sacred spacing and alignment
 * - Performance-optimized CSS Grid and Flexbox
 * - Accessibility-first layout structure
 * - Integration with Quorra design intelligence
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';

// Divine Container Component
const Container = ({ 
  children, 
  maxWidth = 'xl',
  fluid = false,
  className = '',
  style = {},
  ...props 
}) => {
  const containerClasses = [
    'quorra-container',
    !fluid && `quorra-container--${maxWidth}`,
    fluid && 'quorra-container--fluid',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} style={style} {...props}>
      {children}
    </div>
  );
};

// Sacred Grid Component
const Grid = ({ 
  children,
  container = false,
  item = false,
  columns = 12,
  spacing = 2,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'wrap',
  className = '',
  style = {},
  ...props 
}) => {
  const gridClasses = [
    'quorra-grid',
    container && 'quorra-grid--container',
    item && 'quorra-grid--item',
    container && `quorra-grid--spacing-${spacing}`,
    container && `quorra-grid--direction-${direction}`,
    container && `quorra-grid--justify-${justify}`,
    container && `quorra-grid--align-${align}`,
    container && `quorra-grid--wrap-${wrap}`,
    className
  ].filter(Boolean).join(' ');

  const gridStyle = {
    ...style,
    ...(container && { '--quorra-grid-columns': columns })
  };

  return (
    <div className={gridClasses} style={gridStyle} {...props}>
      {children}
    </div>
  );
};

// Divine Column Component
const Col = ({ 
  children,
  xs,
  sm,
  md,
  lg,
  xl,
  auto = false,
  offset,
  order,
  className = '',
  style = {},
  ...props 
}) => {
  const colClasses = [
    'quorra-col',
    auto && 'quorra-col--auto',
    xs && `quorra-col--xs-${xs}`,
    sm && `quorra-col--sm-${sm}`,
    md && `quorra-col--md-${md}`,
    lg && `quorra-col--lg-${lg}`,
    xl && `quorra-col--xl-${xl}`,
    offset && `quorra-col--offset-${offset}`,
    order && `quorra-col--order-${order}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={colClasses} style={style} {...props}>
      {children}
    </div>
  );
};

// Sacred Row Component
const Row = ({ 
  children,
  gutter = [16, 16],
  justify = 'start',
  align = 'top',
  wrap = true,
  className = '',
  style = {},
  ...props 
}) => {
  const [gutterH, gutterV] = Array.isArray(gutter) ? gutter : [gutter, gutter];
  
  const rowClasses = [
    'quorra-row',
    `quorra-row--justify-${justify}`,
    `quorra-row--align-${align}`,
    !wrap && 'quorra-row--nowrap',
    className
  ].filter(Boolean).join(' ');

  const rowStyle = {
    ...style,
    '--quorra-gutter-h': `${gutterH}px`,
    '--quorra-gutter-v': `${gutterV}px`
  };

  return (
    <div className={rowClasses} style={rowStyle} {...props}>
      {children}
    </div>
  );
};

// Divine Flex Component
const Flex = ({ 
  children,
  direction = 'row',
  justify = 'flex-start',
  align = 'stretch',
  wrap = 'nowrap',
  gap = 0,
  inline = false,
  className = '',
  style = {},
  ...props 
}) => {
  const flexClasses = [
    inline ? 'quorra-inline-flex' : 'quorra-flex',
    `quorra-flex--direction-${direction}`,
    `quorra-flex--justify-${justify}`,
    `quorra-flex--align-${align}`,
    `quorra-flex--wrap-${wrap}`,
    gap && `quorra-flex--gap-${gap}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={flexClasses} style={style} {...props}>
      {children}
    </div>
  );
};

// Sacred Space Component
const Space = ({ 
  children,
  direction = 'horizontal',
  size = 'medium',
  align = 'start',
  wrap = false,
  split,
  className = '',
  style = {},
  ...props 
}) => {
  const spaceClasses = [
    'quorra-space',
    `quorra-space--${direction}`,
    `quorra-space--size-${size}`,
    `quorra-space--align-${align}`,
    wrap && 'quorra-space--wrap',
    className
  ].filter(Boolean).join(' ');

  const renderChildren = () => {
    const childrenArray = React.Children.toArray(children);
    
    if (split && childrenArray.length > 1) {
      return childrenArray.reduce((acc, child, index) => {
        acc.push(child);
        if (index < childrenArray.length - 1) {
          acc.push(
            <div key={`split-${index}`} className="quorra-space__split">
              {split}
            </div>
          );
        }
        return acc;
      }, []);
    }
    
    return children;
  };

  return (
    <div className={spaceClasses} style={style} {...props}>
      {renderChildren()}
    </div>
  );
};

// Divine Divider Component
const Divider = ({ 
  orientation = 'horizontal',
  variant = 'solid',
  color = 'default',
  spacing = 'medium',
  children,
  className = '',
  style = {},
  ...props 
}) => {
  const dividerClasses = [
    'quorra-divider',
    `quorra-divider--${orientation}`,
    `quorra-divider--${variant}`,
    `quorra-divider--color-${color}`,
    `quorra-divider--spacing-${spacing}`,
    children && 'quorra-divider--with-text',
    className
  ].filter(Boolean).join(' ');

  if (children) {
    return (
      <div className={dividerClasses} style={style} {...props}>
        <span className="quorra-divider__text">{children}</span>
      </div>
    );
  }

  return <div className={dividerClasses} style={style} {...props} />;
};

// Sacred Section Component
const Section = ({ 
  children,
  padding = 'large',
  background = 'transparent',
  fullHeight = false,
  centered = false,
  className = '',
  style = {},
  as = 'section',
  ...props 
}) => {
  const Component = as;
  
  const sectionClasses = [
    'quorra-section',
    `quorra-section--padding-${padding}`,
    `quorra-section--background-${background}`,
    fullHeight && 'quorra-section--full-height',
    centered && 'quorra-section--centered',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component className={sectionClasses} style={style} {...props}>
      {children}
    </Component>
  );
};

// Divine Stack Component (for vertical layouts)
const Stack = ({ 
  children,
  spacing = 'medium',
  align = 'stretch',
  justify = 'flex-start',
  divider,
  className = '',
  style = {},
  ...props 
}) => {
  const stackClasses = [
    'quorra-stack',
    `quorra-stack--spacing-${spacing}`,
    `quorra-stack--align-${align}`,
    `quorra-stack--justify-${justify}`,
    className
  ].filter(Boolean).join(' ');

  const renderChildren = () => {
    const childrenArray = React.Children.toArray(children);
    
    if (divider && childrenArray.length > 1) {
      return childrenArray.reduce((acc, child, index) => {
        acc.push(child);
        if (index < childrenArray.length - 1) {
          acc.push(
            <div key={`divider-${index}`} className="quorra-stack__divider">
              {divider}
            </div>
          );
        }
        return acc;
      }, []);
    }
    
    return children;
  };

  return (
    <div className={stackClasses} style={style} {...props}>
      {renderChildren()}
    </div>
  );
};

// PropTypes definitions
Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  fluid: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  container: PropTypes.bool,
  item: PropTypes.bool,
  columns: PropTypes.number,
  spacing: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
  align: PropTypes.oneOf(['stretch', 'flex-start', 'center', 'flex-end', 'baseline']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  className: PropTypes.string,
  style: PropTypes.object
};

Col.propTypes = {
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  auto: PropTypes.bool,
  offset: PropTypes.number,
  order: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  justify: PropTypes.oneOf(['start', 'end', 'center', 'space-around', 'space-between', 'space-evenly']),
  align: PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
  wrap: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['row', 'column', 'row-reverse', 'column-reverse']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']),
  align: PropTypes.oneOf(['stretch', 'flex-start', 'center', 'flex-end', 'baseline']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  gap: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  inline: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

Space.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  align: PropTypes.oneOf(['start', 'end', 'center', 'baseline']),
  wrap: PropTypes.bool,
  split: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  variant: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  spacing: PropTypes.oneOf(['small', 'medium', 'large']),
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge']),
  background: PropTypes.oneOf(['transparent', 'white', 'gray', 'primary', 'secondary']),
  fullHeight: PropTypes.bool,
  centered: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  as: PropTypes.elementType
};

Stack.propTypes = {
  children: PropTypes.node.isRequired,
  spacing: PropTypes.oneOf(['none', 'small', 'medium', 'large', 'xlarge']),
  align: PropTypes.oneOf(['stretch', 'flex-start', 'center', 'flex-end']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  divider: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

// Export all layout components
const Layout = {
  Container,
  Grid,
  Col,
  Row,
  Flex,
  Space,
  Divider,
  Section,
  Stack
};

export default Layout;
export { Container, Grid, Col, Row, Flex, Space, Divider, Section, Stack };