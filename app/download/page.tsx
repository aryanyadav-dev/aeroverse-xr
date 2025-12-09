import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-muted/10 flex flex-col items-center justify-center py-12">
      <Container className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Aeroverse XR</h1>
            <p className="text-muted-foreground">
              Experience your designs in augmented and virtual reality with our dedicated applications
            </p>
          </div>

          {/* Download Sections */}
          <div className="space-y-6 mb-8">
            {/* Android Mobile App */}
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-2">Mobile Application</h2>
              <p className="text-sm text-muted-foreground mb-4">
                View and interact with 3D aerospace models on your Android smartphone or tablet
              </p>
              <Button asChild className="w-auto px-6">
                <a href="/builds/AeroVerse%20XR_AR.apk" download>
                  <Image src="/playstore.png" alt="Android" width={20} height={20} className="mr-2" />
                  Download Android APK
                  <Download className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* VR Application */}
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-2">VR Application</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Immersive virtual reality experience for exploring aerospace designs in full scale
              </p>
              <Button asChild className="w-auto px-6">
                <a href="/builds/AeroVerseXR_VR.apk" download>
                  Download VR APK
                  <Download className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="text-sm text-muted-foreground border-t pt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <span>Current version: 1.0.0</span>
            <span>Compatible with Android 8.0+</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
