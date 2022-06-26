import ErrorPage from "components/ErrorPages/ErrorPage";
import React, { ErrorInfo } from "react";

interface Props {
  children: React.ReactNode;
}

export default class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Zaktualizuj stan, aby następny render pokazał zastępcze UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Możesz także zalogować błąd do zewnętrznego serwisu raportowania błędów
    // console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Możesz wyrenderować dowolny interfejs zastępczy.
      return <ErrorPage />;
    }

    return this.props.children;
  }
}
