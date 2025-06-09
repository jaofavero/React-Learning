import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import {describe, it, expect, vi, afterEach, beforeEach} from "vitest";
import "@testing-library/jest-dom/vitest";
import UserProfileTest from "../components/for-tests/UserProfileTest";



describe("UserProfileTest Component", () => {
    
    beforeEach(() => {
        // Mock the fetch function to return a resolved promise with user data
        
        globalThis.fetch = vi.fn()
    })

    afterEach(() => {
        // Restore the original fetch function
        vi.resetAllMocks()
    })

    it("Fetches and displays user profile data", async () => {
        globalThis.fetch.mockResolvedValueOnce({
            json: async () => ({
                id: 4,
                name: "Test User",
                email: "testuser@gmail.com"
            })
        });

        render(<UserProfileTest userId={4} />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByRole("heading", {name: /test user/i})).toBeInTheDocument();
            expect(screen.getByText(/@gmail.com/i)).toBeInTheDocument();
        });
    });
});