import { useQuery } from "@tanstack/react-query";
import type { ProfessorProfile } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllProfiles() {
  const { actor, isFetching } = useActor();
  return useQuery<ProfessorProfile[]>({
    queryKey: ["allProfiles"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllProfiles();
    },
    enabled: !!actor && !isFetching,
  });
}
