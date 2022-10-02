import React from "react";

import './PreviewCards.css'

function PreviewCard({ card, idx }) {
    return (
        <div>
            <div className="card-row">
                <div className="card-header">{idx + 1}</div>
                <div className="card">
                    <div className="card-question-container">
                        <div className="card-contents">
                            <div className="card-content-header">
                                <div className="card-content-header-main">
                                    <div className="card-type">q</div>
                                </div>
                            </div>
                            <div className="card-main-container">
                                <div className="card-preview-text-container">
                                    <p className="card-preview-text">{card.question}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-answer-container">
                        <div className="card-contents">
                            <div className="card-content-header">
                                <div className="card-content-header-main">
                                    <div className="card-type">a</div>
                                </div>
                            </div>
                            <div className="card-main-container">
                                <div className="card-preview-text-container">
                                    <p className="card-preview-text">{card.answer}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default PreviewCard
