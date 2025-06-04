import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-muted/10 flex flex-col items-center justify-center py-12">
      <Container className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col gap-8">
          <div className="mb-2">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Aeroverse XR</h1>
            <p className="text-muted-foreground mb-4">Experience your designs in augmented reality with our dedicated mobile application</p>
            <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg p-4 flex items-start gap-3 mb-6">
              <AlertTriangle className="h-5 w-5 mt-0.5 text-yellow-600" />
              <div>
                <div className="font-semibold">Mobile Only Application</div>
                <div className="text-sm">The Aeroverse XR App is only compatible with smartphones and tablets. Please scan the QR code below or visit this page on your mobile device to download.</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="w-40 h-40 bg-muted flex items-center justify-center rounded-lg border text-muted-foreground text-center text-xs mb-2">
                  QR code to download app
                </div>
                <span className="text-sm text-muted-foreground">Scan to download</span>
              </div>
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <Button asChild className="w-full mb-2">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <span className="inline-flex items-center">
                        <Image src="/playstore.png" alt="Play Store" width={20} height={20} className="mr-2" />
                        Download for Android
                      </span>
                    </a>
                  </Button>
                  <Button asChild className="w-full">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <span className="inline-flex items-center">
                        <Image src="/appstore.png" alt="App Store" width={20} height={20} className="mr-2" />
                        Download for iOS
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground border-t pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <span>Current version: 1.0.0</span>
            <span>Compatible with iOS 14+ and Android 8.0+</span>
          </div>
        </div>
      </Container>
    </div>
  );
} 