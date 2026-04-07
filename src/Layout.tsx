import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="layout">
            <header className="layout-header">
                <div className="layout-header-inner">
                    <span className="layout-header-icon">⚗️</span>
                    <div>
                        <h1 className="layout-header-title">Periodic Table Explorer</h1>
                        <p className="layout-header-subtitle">Interaktivní průvodce prvky</p>
                    </div>
                </div>
            </header>
            <main className="layout-main">
                {children}
            </main>
            <footer className="layout-footer">
                <p>⚗️ Periodic Table Explorer</p>
            </footer>
        </div>
    );
}