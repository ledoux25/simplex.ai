import { useState, useEffect } from "react";
import apiClient from "@/app/utils/axios/axiosConfig";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { Chatbot } from "../_dto/chatBot";
import { loginUser } from "@/app/pages/auth/[loginSignup]/_service/login";

export interface UseChatBotsResult {
  chatbots: Chatbot[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useChatBots = (): UseChatBotsResult => {
  const [chatbots, setChatbots] = useState<Chatbot[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchChatBots = async () => {
    try {
      setLoading(true);
      setError(null); // Reset error state

        await loginUser({
            "email":"ldxspoti001@gmail.com",
            "password":"ldxspoti001@gmail.com"
        })
      // Retrieve token from localStorage
      const token = localStorage.getItem("access-token");

      if (!token) {
        throw new Error("No access token found.");
      }

      // Fetch chatbots data
      const response = await apiClient.get(
        "manage_chatbot/list/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setChatbots(response.data);
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data || "An error occurred while fetching chatbots.");
        // toast.error(err.response?.data || "An error occurred.");
      } else {
        setError((err as Error).message);
        // toast.error((err as Error).message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChatBots(); // Fetch data on component mount
  }, []);

  return { chatbots, loading, error, refetch: fetchChatBots };
};
