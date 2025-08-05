type PaperTextVariant =
  | 'displayLarge'
  | 'displayMedium'
  | 'displaySmall'
  | 'headlineLarge'
  | 'headlineMedium'
  | 'headlineSmall'
  | 'titleLarge'
  | 'titleMedium'
  | 'titleSmall'
  | 'bodyLarge'
  | 'bodyMedium'
  | 'bodySmall'
  | 'labelLarge'
  | 'labelMedium'
  | 'labelSmall';

export const typographyVariant: Record<string, PaperTextVariant> = {
  titleMedium: 'titleMedium',
  bodyMedium: 'bodyMedium',
  headlineMedium: 'headlineMedium',
};
