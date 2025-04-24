# Product Definition Requirements (PDR): AI Coach Integration for Lichess

## Overview
This document defines the requirements and rules for integrating an AI-powered chat and voice coach into Lichess, leveraging ElevenLabs for voice and (if needed) text. The AI Coach will be available exclusively in offline games and analysis modes, providing real-time advice, feedback, and interactive demonstrations to help users improve their chess skills.

## Goals
- **Enhance chess learning**: Offer actionable advice, feedback, and explanations tailored to the user's level.
- **Interactive coaching**: Allow the AI to show patterns, suggest moves, and demonstrate ideas live on the board.
- **Seamless voice and chat**: Integrate ElevenLabs for high-quality voice synthesis and, if needed, text chat.
- **Non-intrusive**: Only available in offline games and analysis, never in online or rated play.

## Scope
- **Modes**: Available in offline games (vs. AI, vs. self) and analysis mode only.
- **Features**:
  - Real-time advice and feedback on moves, plans, and mistakes.
  - Pattern recognition and demonstration (e.g., tactics, checkmate patterns, opening ideas).
  - Ability for the coach to highlight squares, suggest moves, and play out lines on the board.
  - Voice output (and optionally text) using ElevenLabs API.
  - Option for users to ask questions or request explanations via chat or voice.
- **User Experience**:
  - Coach can be toggled on/off.
  - All advice is constructive, encouraging, and level-appropriate.
  - Visual and audio cues are clear and non-disruptive.

## Out of Scope
- No access to coach in online/rated games.
- No persistent data storage of user conversations.
- No advice that could be considered cheating in online play.

## Technical Requirements
- **API Integration**: Use ElevenLabs API for voice synthesis (and text if needed).
- **Frontend**: UI components for chat, voice controls, and board interaction overlays.
- **Backend**: Secure handling of API keys, rate limiting, and user session management.
- **Board Interaction**: Ability for the coach to highlight, suggest, and play moves live.
- **Privacy**: All processing for advice and feedback must comply with Lichess privacy standards.

## CursorRules
1. This PDR document (`modules/coach/AI_Coach_PDR.md`) is the single source of truth for the AI Coach feature.
2. All development, design, and dialogue must reference and adhere to this document.
3. Any changes to requirements or scope must be reflected in this document and communicated to all contributors.
4. All code, UI, and API decisions must be justified with reference to the goals and scope defined here.
5. This document must be cited in all related pull requests, issues, and discussions.

## References
- [ElevenLabs API Documentation](https://docs.elevenlabs.io/)
- [Lichess Open Source Repository](https://github.com/lichess-org/lila)

---
*This document is maintained as the authoritative guide for the AI Coach integration. All contributors must consult and update this file as the project evolves.* 