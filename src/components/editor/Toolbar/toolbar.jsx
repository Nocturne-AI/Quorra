import React, { useState } from 'react';
import './Toolbar.css';
"use client";

import React from 'react';
/**
 * QUORRA DIVINE TOOLBAR COMPONENT
 * Sacred command center blessed by the Goddess of Smithing
 * Features: File operations, Device modes, Actions, Publishing
 */

const Toolbar = ({ 
  onFileAction,
  onDeviceChange,
  onPreview,
  onPublish,
  onUndo,
  onRedo,
  canUndo = false,
  canRedo = false,
  currentDevice = 'desktop',
  projectName = 'Untitled Divine Creation',
  isPreviewMode = false,
  isSaving = false
}) => {
  const [showDeviceMenu, setShowDeviceMenu] = useState(false);
  const [showFileMenu, setShowFileMenu] = useState(false);

  // Device configurations
  const devices = [
    { id: 'mobile', name: 'Mobile', icon: '📱', width: '375px', description: 'iPhone & Android' },
    { id: 'tablet', name: 'Tablet', icon: '📊', width: '768px', description: 'iPad & Tablets' },
    { id: 'desktop', name: 'Desktop', icon: '🖥️', width: '1200px', description: 'Desktop & Laptop' },
    { id: 'wide', name: 'Wide', icon: '🖥️', width: '1440px', description: 'Large Screens' }
  ];

  // File actions
  const fileActions = [
    { id: 'new', name: 'New Project', icon: '📄', shortcut: 'Ctrl+N' },
    { id: 'open', name: 'Open Project', icon: '📁', shortcut: 'Ctrl+O' },
    { id: 'save', name: 'Save Project', icon: '💾', shortcut: 'Ctrl+S' },
    { id: 'saveas', name: 'Save As...', icon: '📋', shortcut: 'Ctrl+Shift+S' },
    { id: 'export', name: 'Export Code', icon: '📤', shortcut: 'Ctrl+E' },
    { id: 'import', name: 'Import Assets', icon: '📥', shortcut: 'Ctrl+I' }
  ];

  const handleFileAction = (actionId) => {
    setShowFileMenu(false);
    if (onFileAction) {
      onFileAction(actionId);
    }
  };

  const handleDeviceChange = (deviceId) => {
    setShowDeviceMenu(false);
    if (onDeviceChange) {
      onDeviceChange(deviceId);
    }
  };

  const currentDeviceInfo = devices.find(d => d.id === currentDevice) || devices[2];

  return (
    <div className="quorra-toolbar">
      {/* Left Section - Brand & File Operations */}
      <div className="quorra-toolbar__left">
        <div className="quorra-toolbar__logo">
          <span className="quorra-logo-icon">🔥</span>
          <span className="quorra-logo-text">QUORRA</span>
        </div>

        <div className="quorra-toolbar__divider" />

        {/* File Menu */}
        <div className="quorra-toolbar__dropdown">
          <button 
            className="quorra-toolbar__button"
            onClick={() => setShowFileMenu(!showFileMenu)}
          >
            <span className="quorra-button-icon">📁</span>
            <span>File</span>
            <span className="quorra-dropdown-arrow">▼</span>
          </button>

          {showFileMenu && (
            <div className="quorra-dropdown-menu">
              {fileActions.map(action => (
                <button
                  key={action.id}
                  className="quorra-dropdown-item"
                  onClick={() => handleFileAction(action.id)}
                >
                  <span className="quorra-dropdown-icon">{action.icon}</span>
                  <span className="quorra-dropdown-text">{action.name}</span>
                  <span className="quorra-dropdown-shortcut">{action.shortcut}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <button 
          className={`quorra-toolbar__button ${!canUndo ? 'quorra-toolbar__button--disabled' : ''}`}
          onClick={onUndo}
          disabled={!canUndo}
          title="Undo (Ctrl+Z)"
        >
          <span className="quorra-button-icon">↶</span>
          <span>Undo</span>
        </button>

        <button 
          className={`quorra-toolbar__button ${!canRedo ? 'quorra-toolbar__button--disabled' : ''}`}
          onClick={onRedo}
          disabled={!canRedo}
          title="Redo (Ctrl+Y)"
        >
          <span className="quorra-button-icon">↷</span>
          <span>Redo</span>
        </button>
      </div>

      {/* Center Section - Project Info & Device Selection */}
      <div className="quorra-toolbar__center">
        <div className="quorra-project-info">
          <span className="quorra-project-name">{projectName}</span>
          {isSaving && (
            <span className="quorra-saving-indicator">
              <span className="quorra-saving-spinner">⟳</span>
              Saving...
            </span>
          )}
        </div>

        <div className="quorra-toolbar__divider" />

        {/* Device Selector */}
        <div className="quorra-toolbar__dropdown">
          <button 
            className="quorra-toolbar__button quorra-toolbar__button--device"
            onClick={() => setShowDeviceMenu(!showDeviceMenu)}
          >
            <span className="quorra-button-icon">{currentDeviceInfo.icon}</span>
            <span>{currentDeviceInfo.name}</span>
            <span className="quorra-device-width">({currentDeviceInfo.width})</span>
            <span className="quorra-dropdown-arrow">▼</span>
          </button>

          {showDeviceMenu && (
            <div className="quorra-dropdown-menu quorra-dropdown-menu--devices">
              {devices.map(device => (
                <button
                  key={device.id}
                  className={`quorra-dropdown-item ${currentDevice === device.id ? 'quorra-dropdown-item--active' : ''}`}
                  onClick={() => handleDeviceChange(device.id)}
                >
                  <span className="quorra-dropdown-icon">{device.icon}</span>
                  <div className="quorra-device-info">
                    <span className="quorra-device-name">{device.name}</span>
                    <span className="quorra-device-description">{device.description}</span>
                  </div>
                  <span className="quorra-device-width">{device.width}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Section - Preview & Publish */}
      <div className="quorra-toolbar__right">
        <button 
          className={`quorra-toolbar__button ${isPreviewMode ? 'quorra-toolbar__button--active' : ''}`}
          onClick={onPreview}
          title="Preview Mode (Ctrl+P)"
        >
          <span className="quorra-button-icon">👁️</span>
          <span>{isPreviewMode ? 'Edit' : 'Preview'}</span>
        </button>

        <div className="quorra-toolbar__divider" />

        <button 
          className="quorra-toolbar__button quorra-toolbar__button--primary"
          onClick={onPublish}
          title="Publish to Divine Web"
        >
          <span className="quorra-button-icon">🚀</span>
          <span>Publish</span>
        </button>

        {/* Settings Menu */}
        <button 
          className="quorra-toolbar__button quorra-toolbar__button--icon"
          title="Divine Settings"
        >
          <span className="quorra-button-icon">⚙️</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;