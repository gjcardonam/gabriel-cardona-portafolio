import { ProgressBar } from "@/components/atoms/ProgressBar";
import type { SkillWithLevel } from "@/types";

type Props = { skill: SkillWithLevel };

export function SkillBar({ skill }: Props) {
  return <ProgressBar value={skill.level} label={skill.name} />;
}
